/* eslint-disable @typescript-eslint/ban-ts-ignore */
import "@testing-library/jest-dom/extend-expect";

// @ts-ignore
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener() {
      return;
    },
    removeListener() {
      return;
    },
  }));

// @ts-ignore
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  (callback => {
    setTimeout(callback, 0);
  });

// @ts-ignore
window.fetch = window.fetch || {};
