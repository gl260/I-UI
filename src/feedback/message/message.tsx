import { defineComponent, PropType, Transition, ref, render, h, onMounted, onUnmounted } from 'vue';
import { MessageType, MessagePlacement, MessageOptions, MessageFunction, MessageItemData } from './interface';
import 'uno.css';

const MessageItem = defineComponent({
  name: 'IMessageItem',
  props: {
    type: {
      type: String as PropType<MessageType>,
      default: 'info',
    },
    message: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 3000,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    placement: {
      type: String as PropType<MessagePlacement>,
      default: 'top',
    },
  },
  setup(props) {
    const visible = ref(false);
    let timer: number | null = null;

    // 关闭消息
    const close = () => {
      visible.value = false;
      window.setTimeout(() => {
        props.onClose();
      }, 800);
    };

    // 启动定时器
    const startTimer = () => {
      clearTimer();
      if (props.duration > 0) {
        timer = window.setTimeout(() => {
          close();
        }, props.duration);
      }
    };

    // 清除定时器
    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    };

    // 组件挂载后显示，触发进入动画
    onMounted(() => {
      visible.value = true;
      startTimer();
    });

    onUnmounted(() => {
      clearTimer();
    });

    const iconType = () => {
      const icon = {
        success: 'i-ic-sharp-check-circle ',
        warning: 'i-ic-sharp-error',
        danger: 'i-ic-baseline-cancel',
        info: 'i-ic-round-info',
      };
      return icon[props.type];
    };
    const bgColor = () => {
      const color = {
        success: 'bg-#f6ffed border-#b7eb8f',
        warning: 'bg-#fffbe6 border-#ffe58f',
        danger: 'bg-#fff2f0 border-#ffccc7',
        info: `bg-#f4f4f5 border-${props.type}`,
        primary: `bg-#f0defd border-${props.type}`,
      };
      return color[props.type];
    };
    return () => (
      <Transition name="message-fade">
        {visible.value && (
          <div
            class={`
              i-message-item
              py-[6px] px-[12px]
              border-1 border-solid ${bgColor()} rounded-md
              flex items-center gap-[8px]
            `}
          >
            <i class={`${iconType()} text-[14px] text-${props.type}`}></i>
            <span class={`text-[14px] text-#303133`}>{props.message}</span>
          </div>
        )}
      </Transition>
    );
  },
});

const getPlacementStyle = (placement: MessagePlacement) => {
  const styles = {
    top: {
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    bottom: {
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    'top-left': {
      top: '20px',
      left: '20px',
    },
    'top-right': {
      top: '20px',
      right: '20px',
    },
    'bottom-right': {
      bottom: '20px',
      right: '20px',
    },
    'bottom-left': {
      bottom: '20px',
      left: '20px',
    },
  };
  return styles[placement];
};

const createMessageManager = (): MessageFunction => {
  // 消息队列：存储所有当前显示的消息
  let messages: MessageItemData[] = [];
  // 容器 用来挂载消息组件
  let containers = new Map<MessagePlacement, HTMLElement>();
  // 消息id (确保唯一值)
  let id = 0;

  /**
   * 创建指定位置的容器
   * 1. 如果该位置容器不存在，创建并添加到body
   * 2. 如果已存在，直接返回现有容器
   * @param placement 消息位置
   * @returns 容器元素
   */
  const createContainer = (placement: MessagePlacement) => {
    if (!containers.has(placement)) {
      const container = document.createElement('div');
      container.className = `i-message-container i-message-container-${placement}`;
      container.style.cssText = `
        position: fixed;
        pointer-events: none; /* 允许点击穿透到下方元素 */
        z-index: 99999;
      `;
      // container.style = { ...container.style, ...getPlacementStyle(placement) } 合并样式
      Object.assign(container.style, getPlacementStyle(placement)); // 合并样式
      document.body.appendChild(container);
      containers.set(placement, container);
    }
    return containers.get(placement); // 返回容器元素 不然在renderMessages()中使用msgContainer时无法获取到容器元素
  };

  /**
   * 移除指定 placement 的容器
   * 当该 placement 的所有消息都消失后，从DOM中移除容器
   * @param placement - 要移除容器的位置
   */
  const removeContainer = (placement: MessagePlacement) => {
    const container = containers.get(placement);
    if (container?.parentNode) {
      render(null, container);
      document.body.removeChild(container);
      containers.delete(placement);
    }
  };

  /**
   * 渲染指定 placement 的所有消息到DOM
   * 使用Vue的render函数手动渲染
   */
  const renderMessagesByPlacement = (placement: MessagePlacement, placementMessages: typeof messages) => {
    // 如果消息队列为空，移除容器
    if (messages.length === 0) {
      removeContainer(placement);
      return;
    }

    const msgContainer = createContainer(placement);

    // 将每条消息转换为MessageItem组件
    const messageNodes = placementMessages.map(item => {
      return h(MessageItem, {
        key: item.id,
        type: item.type as MessageType,
        message: item.message,
        duration: item.duration,
        placement: item.placement as MessagePlacement,
        onClose: () => removeMessage(item.id),
        // 设置垂直位置：每条消息的偏移，避免重叠
        style: {
          marginBottom: placement.startsWith('top') ? '20px' : '0',
          marginTop: placement.startsWith('bottom') ? '20px' : '0',
        },
      });
    });

    // 将所有的消息包裹在其中
    const messageWrapper = h(
      'div',
      {
        class: 'i-message-wrapper',
        style: {
          display: 'flex',
          flexDirection: placement.startsWith('top') ? 'column' : 'column-reverse',
          alignItems: 'center',
          pointerEvents: 'none', // 允许点击穿透
        },
      },
      messageNodes,
    );

    // 将虚拟DOM渲染到真实DOM
    render(messageWrapper, msgContainer as any);
  };

  /**
   * 渲染所有消息到DOM
   * 按 placement 分组渲染
   */
  const renderMessages = () => {
    // 按位置分组消息
    const messagesByPlacement = new Map<MessagePlacement, MessageItemData[]>();

    messages.forEach(item => {
      const placement = item.placement || 'top';
      if (!messagesByPlacement.has(placement)) {
        messagesByPlacement.set(placement, []);
      }

      // 将消息添加到对应位置的组中
      messagesByPlacement.get(placement).push(item);
    });

    // 遍历 meessageByPlacement 渲染每个 placement 的消息
    messagesByPlacement.forEach((placementMessages, placement) => {
      renderMessagesByPlacement(placement, placementMessages);
    });

    // 移除所有空容器
    containers.forEach((container, placement) => {
      if (!messagesByPlacement.has(placement)) {
        removeContainer(placement);
      }
    });
  };

  /**
   * 移除指定消息
   * @param messageId 消息id
   */
  const removeMessage = (messageId: number) => {
    // 过滤掉指定ID的消息
    messages = messages.filter(item => item.id !== messageId);
    // 重新渲染剩余消息
    renderMessages();
  };

  /**
   * 显示消息的核心函数
   * @param type 消息类型
   * @param message 消息内容
   * @param duration 消息持续时间 (默认3000ms)
   * @param placement 消息位置 (默认top)
   */
  const show = (type: MessageType, message: string, duration: number = 3000, placement?: MessagePlacement) => {
    id += 1;
    const messageId = id;
    messages.push({ id: messageId, type, message, duration, placement });

    renderMessages();
  };

  /**
   * 主消息函数 - 支持对象配置
   * 用法: IMessage({ message: 'xxx', type: 'success' })
   * @param options 消息配置对象
   */
  const messageFn = ((options: MessageOptions | string) => {
    if (typeof options === 'string') {
      show('info', options, 3000);
    } else {
      const { type = 'info', message, duration, placement } = options;
      show(type, message, duration, placement);
    }
  }) as MessageFunction;

  messageFn.success = (message: string, duration: number = 3000) => {
    show('success', message, duration);
  };
  messageFn.warning = (message: string, duration: number = 3000) => {
    show('warning', message, duration);
  };
  messageFn.danger = (message: string, duration: number = 3000) => {
    show('danger', message, duration);
  };
  messageFn.info = (message: string, duration: number = 3000) => {
    show('info', message, duration);
  };

  return messageFn as MessageFunction;
};

const messageManager = createMessageManager();

export const IMessage = messageManager;

/**
 * render函数用于将虚拟节点渲染到真实的DOM容器中 render(vnode, container)
 * vnode：要渲染的虚拟节点。
 * container：一个DOM元素，作为渲染的容器
 * 例如：
 * render(h('div', 'Hello'), container); // 容器内容：<div>Hello</div>
 * render(null, container); // 清理 Vue 渲染的内容
 */

/**
 * h函数是Vue中用于创建虚拟节点（vnode）的函数 h(type, props, children)
 * type：一个HTML标签名、组件、异步组件或函数式组件。必填
 * props：一个对象，包含与模板中attribute、prop和事件对应的数据。可选。
 * children：子虚拟节点，使用h()构建
 */
