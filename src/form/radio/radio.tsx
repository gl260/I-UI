import { defineComponent } from 'vue';
import 'uno.css';
export default defineComponent({
  name: 'IRadio',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    return () => (
      <label class="i-radio">
        <span class="i-radio-wrapper">
          <input class="i-radio-input" type="radio" />
          <span class="i-radio-inner"></span>
        </span>
        <span class="i-radio-label">{slots.default?.()}</span>
      </label>
    );
  },
});
