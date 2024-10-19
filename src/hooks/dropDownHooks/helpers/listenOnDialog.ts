import { blockConfirmBtn } from "@/assets/static/hooks";
import getBlockDialog from "./getBlockDialog";
import { Dispatch, MutableRefObject } from "react";

export default function listenOnDialog(
  setIsTriggered: Dispatch<boolean>,
  isFromDropDown: MutableRefObject<boolean>
) {
  if (!getBlockDialog()) return;
  const blockBtn = getBlockDialog()!.querySelector(
    `[data-testid="${blockConfirmBtn}"]`
  );
  if (!blockBtn) return;
  blockBtn.addEventListener("click", () => {
    isFromDropDown.current = false;
    setIsTriggered(true);
  });
}
