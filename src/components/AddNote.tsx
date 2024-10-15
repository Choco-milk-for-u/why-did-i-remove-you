import useBlockBtnClick from "@/hooks/useBlockBtnClick";
import useDropDownObserver from "@/hooks/useDropDownObserver";

export default function AddNote() {
  useDropDownObserver();
  const isBlockClicked = useBlockBtnClick();
  if (!isBlockClicked) return null;

  return (
    <div>
      <h1 id="test">Add Note</h1>
    </div>
  );
}
