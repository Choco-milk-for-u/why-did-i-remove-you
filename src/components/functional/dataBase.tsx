import { createContext } from "react";

const initialState = {
  database: null,
};
const DataBaseContext = createContext<{ database: IDBDatabase | null }>(
  initialState
);
export function DataBaseProvider({
  children,
  dataBase,
}: {
  children: React.ReactNode;
  dataBase: IDBDatabase;
}) {
  return (
    <DataBaseContext.Provider value={{ database: dataBase }}>
      {children}
    </DataBaseContext.Provider>
  );
}
