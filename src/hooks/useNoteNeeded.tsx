import useDropDownTrigger from "./dropDownHooks/useDropDownTrigger";

export default function useNoteNeeded() {
  const isFromDropDown = useDropDownTrigger();
  return isFromDropDown;
}
