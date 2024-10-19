import { muteBtnId, blockBtnId } from "@/assets/static/hooks";
import getDropDown from "./getDropDown";
import { Dispatch, MutableRefObject } from "react";

export default function listenOnDropDown(
  setIsTriggered: Dispatch<boolean>,
  isFromDropDown: MutableRefObject<boolean>
) {
  if (!getDropDown()) return;
  const muteBtn = getDropDown()!.querySelector(`[data-testid="${muteBtnId}"]`);
  if (!muteBtn) return;
  muteBtn.addEventListener("click", () => {
    setIsTriggered(true);
  });
  const blockBtn = getDropDown()!.querySelector(
    `[data-testid="${blockBtnId}"]`
  );
  if (!blockBtn) return;
  blockBtn.addEventListener("click", () => {
    isFromDropDown.current = true;
  });
}
