import { dropDownId } from "@/assets/static/hooks";
import getByTestId from "./getByTestId";

export default function getDropDown() {
  return getByTestId(dropDownId);
}
