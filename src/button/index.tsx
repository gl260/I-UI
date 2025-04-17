import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "IButton",
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | ''>,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => 
      <button class={`
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        ${props.type ? 'text-white' : 'text-#606266'}
        bg-${props.type ? props.type : '#fff'}
        hover:bg-${props.type ? props.type : '#fff'}/70
        border-none
        cursor-pointer`}> 
        {slots.default ? slots.default() : ''}
      </button>
  }
});