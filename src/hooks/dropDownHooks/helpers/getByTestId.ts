export default function getByTestId(testId: string) {
  const el = `[data-testid="${testId}"]`;
  const foundEl = document.querySelector(el);
  return foundEl;
}
