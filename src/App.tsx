import AddNote from "./components/functional/AddNote/AddNote";
import useNoteNeeded from "./hooks/useNoteNeeded";
import { ThemeProvider } from "./components/functional/theme-provider";
import useGetTheme from "./hooks/useGetTheme";
import { Fragment } from "react/jsx-runtime";
import useDataBase from "./hooks/dropDownHooks/useDataBase";
import { DataBaseProvider } from "./components/functional/dataBase";

function App() {
  const theme = useGetTheme();
  const db = useDataBase();
  const isNoteNeeded = useNoteNeeded(db);
  return (
    <Fragment>
      <DataBaseProvider dataBase={db}>
        <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
          <AddNote isNoteNeeded={isNoteNeeded} />
        </ThemeProvider>
      </DataBaseProvider>
    </Fragment>
  );
}

export default App;
