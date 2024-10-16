import getDropDown from "./helpers/getDropDown";
import useDomObserver from "../useDomObserver";

export default function useDropDownObserver() {
  const isDropDownDetected = useDomObserver(
    document.getRootNode(),
    getDropDown
  );
  return isDropDownDetected;
}
