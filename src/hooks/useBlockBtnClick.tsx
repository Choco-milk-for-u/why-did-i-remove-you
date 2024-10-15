import { useSyncExternalStore } from "react";

function subscribeToClick(callback: EventListener) {
  const menuId = '[data-testid="Dropdown"]';
  const menu = document.querySelector(menuId);
  if (!menu) return () => {};
  const blockBtn = menu.querySelector('[data-testid="block"]');
  if (!blockBtn) return () => {};
  blockBtn.addEventListener("click", callback);
  return () => {
    blockBtn.removeEventListener("click", callback);
  };
}
function setState(val: boolean) {
  window.localStorage.setItem("isNoteNeeded", JSON.stringify(val));
  return val;
}
function getBtnState() {
    const oldIsNoteNeeded = window.localStorage.getItem("isNoteNeeded");
    if (!oldIsNoteNeeded) return setState(false);
    const isNoteNeeded = oldIsNoteNeeded ? false : true;
    return setState(isNoteNeeded);
  return true;
}
export default function useBlockBtnClick() {
  const isNoteNeeded = useSyncExternalStore(subscribeToClick, getBtnState);
  return isNoteNeeded;
}
