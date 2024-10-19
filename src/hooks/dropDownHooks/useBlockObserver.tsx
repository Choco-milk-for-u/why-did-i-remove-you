import useDomObserver from "../useDomObserver";
import getBlockDialog from "./helpers/getBlockDialog";

export default function useBlockObserver() {
  const isBlockDialogDetected = useDomObserver(document.getRootNode(), () =>
    getBlockDialog() ? true : false
  );
  return isBlockDialogDetected;
}
