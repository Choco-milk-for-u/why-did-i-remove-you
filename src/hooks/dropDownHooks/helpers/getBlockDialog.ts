import { blockDialog } from "@/assets/static/hooks";

export default function getBlockDialog() {
  const dialogId = `[data-testid="${blockDialog}"]`;
  const dialog = document.querySelector(dialogId);
  return dialog;
}
