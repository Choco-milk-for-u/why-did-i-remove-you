import { Fragment } from "react";
import AddNote from "./components/functional/AddNote/AddNote";
import useNoteNeeded from "./hooks/useNoteNeeded";

function App() {
  const isNoteNeeded = useNoteNeeded();
  return (
    <Fragment>
      <AddNote isNoteNeeded={true} />
    </Fragment>
  );
}

export default App;
