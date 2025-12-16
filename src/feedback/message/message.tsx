import { defineComponent, PropType, Transition, ref, render, h, onMounted, onUnmounted } from 'vue';
import { MessageFunction } from './interface';
import 'uno.css';

const MessageItem = defineComponent({
  name: 'IMessageItem',
  props: {
    type: {
      type: String as PropType<'info' | 'success' | 'warning' | 'danger'>,
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
      default: () => {},
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

const createMessageManager = (): MessageFunction => {
  // 消息队列
  let messages: Array<{ id: number; type: 'info' | 'success' | 'warning' | 'danger'; message: string; duration: number }> = [];
  // 容器 用来挂载消息组件
  let container = null;
  // 消息id (确保唯一值)
  let id = 0;

  /**
   * 创建消息容器
   * 如果不存在则创建并添加到body末尾
   */
  const createContainer = () => {
    if (!container) {
      container = document.createElement('div');
      container.className = 'i-message-container';
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none; /* 允许点击穿透到下方元素 */
        z-index: 99999;;
      `;
      document.body.appendChild(container);
    }
    return container; // 返回容器元素 不然在renderMessages()中使用msgContainer时无法获取到容器元素
  };

  /**
   * 移除i-message-container
   * 当所有消息都消失后，从DOM中移除容器
   * parentNode: 获取元素的父节点
   */
  const removeContainer = () => {
    if (container?.parentNode) {
      render(null, container);
      document.body.removeChild(container);
      container = null;
    }
  };

  /**
   * 渲染所有消息到DOM
   * 使用Vue的render函数手动渲染
   */
  const renderMessages = () => {
    // 如果消息队列为空，移除容器
    if (messages.length === 0) {
      removeContainer();
      return;
    }

    const msgContainer = createContainer();

    // 将每条消息转换为MessageItem组件
    const messageNodes = messages.map(item => {
      return h(MessageItem, {
        key: item.id,
        type: item.type as 'info' | 'success' | 'warning' | 'danger',
        message: item.message,
        duration: item.duration,
        onClose: () => removeMessage(item.id),
        // 设置垂直位置：每条消息向下偏移，避免重叠
        style: {
          marginBottom: '20px',
        },
      });
    });

    // 将所有的消息包裹在其中
    const messageWrapper = h(
      'div',
      {
        class: 'i-message-wrapper',
        style: {
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none', // 允许点击穿透
        },
      },
      messageNodes,
    );

    // 将虚拟DOM渲染到真实DOM
    render(messageWrapper, msgContainer as any);
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
   */
  const show = (type: 'success' | 'warning' | 'danger' | 'info', message: string, duration: number = 3000) => {
    id += 1;
    const messageId = id;
    messages.push({ id: messageId, type, message, duration });

    renderMessages();
  };

  /**
   * 主消息函数 - 支持对象配置
   * 用法: IMessage({ message: 'xxx', type: 'success' })
   * @param options 消息配置对象
   */
  const messageFn = ((options: { type: 'success' | 'warning' | 'danger' | 'info'; message: string; duration: number } | string) => {
    if (typeof options === 'string') {
      show('info', options, 3000);
    } else {
      const { type = 'info', message, duration } = options;
      show(type, message, duration);
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
