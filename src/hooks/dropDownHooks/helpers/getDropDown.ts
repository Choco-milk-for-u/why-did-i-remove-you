import { dropDownId } from "@/assets/static/hooks";

export default function getDropDown() {
  const menuId = `[data-testid="${dropDownId}]`;
  const menu = document.querySelector(menuId);
  return menu;
}
