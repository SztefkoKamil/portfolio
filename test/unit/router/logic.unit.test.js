import sinon from 'sinon';
import logic from '../../../src/router/logic';
import eventBus from '../../../src/misc/eventBus';

describe('/router/logic.js', () => {
  it('prevRoute() should call router.push() with proper previous route path', () => {
    const routerMock = {
      currentRoute: { name: 'Skills' },
      push: jest.fn()
    };

    logic.prevRoute.apply(routerMock);
    expect(routerMock.push).toHaveBeenCalledWith('/about');

    jest.resetAllMocks();
    routerMock.currentRoute.name = 'Intro';

    logic.prevRoute.apply(routerMock);
    expect(routerMock.push).toHaveBeenCalledWith('/contact');
  });

  it('nextRoute() should call router.push() with proper next route path', () => {
    const routerMock = {
      currentRoute: { name: 'Skills' },
      push: jest.fn()
    };

    logic.nextRoute.apply(routerMock);
    expect(routerMock.push).toHaveBeenCalledWith('/projects');

    jest.resetAllMocks();
    routerMock.currentRoute.name = 'Contact';

    logic.nextRoute.apply(routerMock);
    expect(routerMock.push).toHaveBeenCalledWith('/');
  });

  it('makeTitle() should properly makes title for root path', () => {
    const to = { path: '/' };

    const actual = logic.makeTitle(to);
    const expected = 'Kamil Sztefko - Web Developer';
    expect(actual).toBe(expected);
  });

  it('makeTitle() should properly makes title for other paths', () => {
    const to = {
      path: '/about',
      meta: { title: 'About Me' }
    };

    const actual = logic.makeTitle(to);
    const expected = `${to.meta.title} - Kamil Sztefko`;
    expect(actual).toBe(expected);
  });

  it('setTransitionDirection() should emit prevRoute or nextRoute via eventBus', () => {
    const emit = sinon.stub(eventBus, '$emit');
    const to = { name: 'Contact' };
    const from = { name: 'Projects' };

    logic.setTransitionDirection(to, from);
    sinon.assert.calledOnceWithExactly(emit, 'nextRoute');

    emit.resetHistory();
    to.name = 'About';
    from.name = 'Skills';
    logic.setTransitionDirection(to, from);
    sinon.assert.calledOnceWithExactly(emit, 'prevRoute');

    sinon.restore();
  });

  it('beforeEachLogic() should call eventBus.$emit(hideDown) & next()', () => {
    const to = {
      path: '/contact',
      name: 'Contact',
      meta: { title: 'Contact' }
    };
    const from = {
      name: 'Projects'
    };
    const next = jest.fn();
    const emit = sinon.stub(eventBus, '$emit');

    logic.beforeEachLogic(to, from, next);

    sinon.assert.calledWithExactly(emit, 'hideDown');
    expect(next).toHaveBeenCalledTimes(1);

    sinon.restore();
  });
});
