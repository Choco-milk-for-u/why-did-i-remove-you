import useDropDownObserver from "./useDropDownObserver";
import { useRef, useState } from "react";
import useBlockObserver from "./useBlockObserver";
import listenOnDropDown from "./helpers/listenOnDropDown";
import listenOnDialog from "./helpers/listenOnDialog";

export default function useDropDownTrigger() {
  const [isTriggered, setIsTriggered] = useState<boolean>(false);

  const isBlockDialog = useBlockObserver();
  const isDropDown = useDropDownObserver();

  const isFromDropDown = useRef<boolean>(false);

  if (isDropDown) {
    listenOnDropDown(setIsTriggered, isFromDropDown);
  }
  if (isBlockDialog && isFromDropDown.current) {
    listenOnDialog(setIsTriggered, isFromDropDown);
  }
  return isTriggered;
}
