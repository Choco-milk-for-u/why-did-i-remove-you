import { useSyncExternalStore } from "react";

function subscribeToDomChanges(callback: Function) {
  const root = document.getRootNode();
  if (!root) return () => {};

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        callback();
      }
    }
  });
  observer.observe(root, { childList: true, subtree: true });
  return () => observer.disconnect();
}

function getDomState() {
  const menuId = '[data-testid="Dropdown"]';
  const menu = document.querySelector(menuId);
  return menu ? true : false;
}

export default function useDropDownObserver() {
  const isDropDownDetected = useSyncExternalStore(
    subscribeToDomChanges,
    getDomState
  );
  return isDropDownDetected;
}
