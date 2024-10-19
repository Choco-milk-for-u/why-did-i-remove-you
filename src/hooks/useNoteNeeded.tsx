import useDropDownTrigger from "./dropDownHooks/useDropDownTrigger";

export default function useNoteNeeded(db: IDatab) {
  const isFromDropDown = useDropDownTrigger();
  return isFromDropDown;
}
