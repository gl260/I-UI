import { defineComponent } from "vue";

export default defineComponent({
  name: "IButton",
  setup(props, { slots }) {
    return () => 
      <button class={`
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        text-#606266
        bg-#fff
        hover:bg-#fff/70
        border-none
        cursor-pointer`}> 
        {slots.default ? slots.default() : ''}
      </button>
  }
});