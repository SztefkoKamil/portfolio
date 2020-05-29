import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import sinon from 'sinon';

import Controls from '../../../src/components/Controls';
import eventBus from '../../../src/misc/eventBus';

describe('/components/Controls.vue', () => {
  afterEach(() => sinon.restore());

  it('should comprise 2 buttons, one class=left & one class=right ', () => {
    const wrapper = shallowMount(Controls);
    const leftBtn = wrapper.find('button.left');
    const rightBtn = wrapper.find('button.right');

    expect(leftBtn.exists()).toBe(true);
    expect(rightBtn.exists()).toBe(true);
  });

  it('should comprise button class=down when eventBus.showDown has been called', async () => {
    const wrapper = shallowMount(Controls);

    eventBus.$emit('showDown');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('button.down').exists()).toBe(true);
  });

  it('should emit scrollDown when button.left has been clicked', () => {
    const emit = sinon.stub(eventBus, '$emit');
    const wrapper = shallowMount(Controls, {
      data: () => ({ showDown: true })
    });

    wrapper.find('button.down').trigger('click');
    sinon.assert.calledWith(emit, 'scrollDown');
  });

  it('should call proper methods when component has been mounted', () => {
    const checkTouchFake = jest.fn();
    const listenWheelSpinFake = jest.fn();
    const listenKeyboardFake = jest.fn();
    shallowMount(Controls, {
      methods: {
        checkTouch: checkTouchFake,
        listenWheelSpin: listenWheelSpinFake,
        listenKeyboard: listenKeyboardFake
      }
    });

    expect(checkTouchFake).toHaveBeenCalledTimes(1);
    expect(listenWheelSpinFake).toHaveBeenCalledTimes(1);
    expect(listenKeyboardFake).toHaveBeenCalledTimes(1);
  });

  it('should behave properly when button.left has been clicked', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    router.prevRoute = jest.fn();
    const emit = sinon.stub(eventBus, '$emit');
    const data = () => ({ spamClickBlocker: true });
    const wrapper = shallowMount(Controls, { data, localVue, router });
    const leftBtn = wrapper.find('button.left');

    leftBtn.trigger('click');
    expect(wrapper.vm.$router.prevRoute).toHaveBeenCalledTimes(0);

    wrapper.setData({ spamClickBlocker: false });

    leftBtn.trigger('click');
    sinon.assert.calledTwice(emit);
    sinon.assert.calledWith(emit.firstCall, 'controlClick');
    sinon.assert.calledWith(emit.secondCall, 'prevRoute');
    expect(wrapper.vm.$router.prevRoute).toHaveBeenCalledTimes(1);
  });

  it('should behave properly when button.right has been clicked', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    router.nextRoute = jest.fn();
    const emit = sinon.stub(eventBus, '$emit');
    const data = () => ({ spamClickBlocker: true });
    const wrapper = shallowMount(Controls, { data, localVue, router });
    const leftBtn = wrapper.find('button.right');

    leftBtn.trigger('click');
    expect(wrapper.vm.$router.nextRoute).toHaveBeenCalledTimes(0);

    wrapper.setData({ spamClickBlocker: false });

    leftBtn.trigger('click');
    sinon.assert.calledTwice(emit);
    sinon.assert.calledWith(emit.firstCall, 'controlClick');
    sinon.assert.calledWith(emit.secondCall, 'nextRoute');
    expect(wrapper.vm.$router.nextRoute).toHaveBeenCalledTimes(1);
  });
});
