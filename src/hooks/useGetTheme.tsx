import allowedScheme from "@/assets/static/allowedScheme";
import useDomObserver from "./useDomObserver";
import { twitterScheme } from "@/assets/static/main";

function isAllowedTheme(scheme: string) {
  return allowedScheme.includes(scheme);
}
function getTheme() {
  const style = document.documentElement.getAttribute("style") || "";
  const colorSchemeMatch = style.match(new RegExp(`${twitterScheme}\\s*(\\w+)`));
  const scheme = colorSchemeMatch ? colorSchemeMatch[1] : null;
  if (!scheme || !isAllowedTheme(scheme)) return "light";
  return scheme;
}
export default function useGetTheme() {
  return useDomObserver(document.documentElement, getTheme, {
    observChildren: false,
    observDecendants: false,
  });
}
