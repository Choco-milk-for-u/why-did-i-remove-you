import { useSyncExternalStore } from "react";

export default function useDomObserver(
  parent: Element | Node | null,
  elChecker: () => any,
  options: { observChildren: boolean; observDecendants: boolean } = {
    observChildren: true,
    observDecendants: true,
  }
) {
  const { observChildren, observDecendants } = options;
  function subscribeToDomChanges(callback: Function) {
    if (!parent) return () => {};
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          callback();
        }
      }
    });
    observer.observe(parent, {
      childList: observChildren,
      subtree: observDecendants,
      attributes: !observDecendants || !observDecendants,
    });
    return () => observer.disconnect();
  }

  function getDomState() {
    return elChecker();
  }
  return useSyncExternalStore(subscribeToDomChanges, getDomState);
}
