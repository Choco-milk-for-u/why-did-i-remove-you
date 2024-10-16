import { blockConfirmBtn, muteBtnId } from "@/assets/static/hooks";
import useDropDownObserver from "./useDropDownObserver";
import { useState } from "react";
import useBlockObserver from "./useBlockObserver";
import getBlockDialog from "./helpers/getBlockDialog";
import getDropDown from "./helpers/getDropDown";

export default function useDropDownTrigger() {
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const isBlockDialog = useBlockObserver();
  const isDropDown = useDropDownObserver();
  
  if (isDropDown) {
    if (!getDropDown()) return false;
    const muteBtn = getDropDown()!.querySelector(
      `[data-testid="${muteBtnId}"]`
    );
    if (!muteBtn) return false;
    muteBtn.addEventListener("click", () => {
      setIsTriggered(true);
    });
  }
  if (isBlockDialog) {
    if (!getBlockDialog()) return false;
    const blockBtn = getBlockDialog()!.querySelector(
      `[data-testid="${blockConfirmBtn}"]`
    );
    if (!blockBtn) return false;
    blockBtn.addEventListener("click", () => {
      setIsTriggered(true);
    });
  }
  return isTriggered;
}
