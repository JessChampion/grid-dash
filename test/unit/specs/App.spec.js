import Vue from 'vue';
import App from '@/App';

describe('App.vue', () => {
  it('should render without crashing', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();

    expect(vm).toBeDefined();
  });
});
