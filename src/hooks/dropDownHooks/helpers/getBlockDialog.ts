import { blockDialog } from "@/assets/static/hooks";
import getByTestId from "./getByTestId";

export default function getBlockDialog() {
  return getByTestId(blockDialog);
}
