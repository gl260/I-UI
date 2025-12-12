import { defineComponent, PropType, ref, Transition } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'IAlert',
  props: {
    type: {
      type: String as PropType<'success' | 'warning' | 'danger' | 'info' | 'primary'>,
      default: 'info',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    closable: {
      type: Boolean,
      default: false,
    },
    closeText: {
      type: String,
      default: '',
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { slots, emit }) {
    const visible = ref(true);
    const handleClose = () => {
      visible.value = false;
      emit('close');
    };
    const titleIcon = () => {
      const icon = {
        success: 'i-ic-sharp-check-circle-outline',
        warning: 'i-ic-sharp-error-outline',
        danger: 'i-ic-outline-cancel',
        info: 'i-ic-outline-info',
      };
      if (props.showIcon && props.title) {
        return <i class={`${icon[props.type]} text-[20px] mr-[6px] text-${props.type}`}></i>;
      }
      return null;
    };
    const descriptionIcon = () => {
      const icon = {
        success: 'i-ic-sharp-check-circle',
        warning: 'i-ic-sharp-error',
        danger: 'i-ic-baseline-cancel',
        info: 'i-ic-round-info',
      };
      if (props.showIcon && !props.title) {
        return <i class={`${icon[props.type]} text-[16px] mr-[6px] text-${props.type}`}></i>;
      }
      return null;
    };

    const handleSlotIcon = () => {
      if (!slots.icon) return;
      return (
        <span class={`i-alert-slot-icon flex mr-[6px] text-${props.type} ${props.title ? 'text-[20px]' : 'text-[16px]'}`}>
          {slots.icon()}
        </span>
      );
    };

    const bgColor = () => {
      const color = {
        success: 'bg-#f6ffed border-#b7eb8f',
        warning: 'bg-#fffbe6 border-#ffe58f',
        danger: 'bg-#fff2f0 border-#ffccc7',
        info: `bg-${props.type}/20 border-${props.type}`,
        primary: `bg-${props.type}/20 border-${props.type}`,
      };
      return color[props.type];
    };
    return () => (
      <Transition name="alert-fade">
        {visible.value && (
          <div
            class={`
              i-alert
              text-[14px] text-#303133
              rounded-md
              border-1 border-solid ${bgColor()} box-border
              flex ${props.title ? 'items-start p-[14px]' : 'items-center py-[8px] px-[12px]'} justify-between
              relative
            `}
          >
            <div class={`i-alert-content flex ${props.title ? 'items-start' : 'items-center'} `}>
              {props.title && handleSlotIcon()}
              {titleIcon()}
              <div>
                <div class={`i-alert-title text-[16px] font-bold ${props.title && 'mb-[4px]'}`}>{props.title}</div>
                <div class={`i-alert-description flex items-center text-[14px]`}>
                  {!props.title && handleSlotIcon()}
                  {descriptionIcon()}
                  {props.description}
                  {slots.default?.() || slots.description?.()}
                </div>
              </div>
            </div>
            <div class={`i-alert-close flex cursor-pointer text-[14px] text-#909399 hover:text-#606266 whitespace-nowrap`}>
              {props.closable && <i class={`i-line-md-close`} onClick={handleClose}></i>}
              {props.closeText && <span onClick={handleClose}>{props.closeText}</span>}
            </div>
          </div>
        )}
      </Transition>
    );
  },
});
