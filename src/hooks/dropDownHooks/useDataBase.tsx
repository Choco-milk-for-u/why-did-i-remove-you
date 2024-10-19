import { useSyncExternalStore } from "react";

function subscribe(callback: any) {
  const request = window.indexedDB.open("WhyDidYouRemoveMeDB", 3);
  if (!request || !request.onsuccess) return null;
  return request.onsuccess(callback);
}
function getDb(event?: any) {
  if (!event) return null;
  return event.target.result;
}
export default function useDataBase() {
  const db = useSyncExternalStore(subscribe, getDb);
  return db;
}
