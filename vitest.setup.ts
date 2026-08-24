import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement IntersectionObserver. Component tests only need
// it to exist and not throw — actual intersection behaviour is covered
// by the browser check in the implementation gate, not unit tests.
class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = IntersectionObserverStub;
