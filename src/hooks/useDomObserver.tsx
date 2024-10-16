import { useSyncExternalStore } from "react";

export default function useDomObserver(
  parent: Element | Node | null,
  elChecker: () => Element | null
) {
  function subscribeToDomChanges(callback: Function) {
    if (!parent) return () => {};
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          callback();
        }
      }
    });
    observer.observe(parent, { childList: true, subtree: true });
    return () => observer.disconnect();
  }

  function getDomState() {
    return elChecker() ? true : false;
  }
  return useSyncExternalStore(subscribeToDomChanges, getDomState);
}
