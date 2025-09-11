import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "./App.tsx";

test("app funktioniert", async () => {
  const screen = render(<App />);

  await expect(screen.getByText(/Hello React/i)).toBeInTheDocument();
  await screen.getByRole("button", {name: "Nächste"}).click();
  await expect(screen.getByText(/Hello HTML/i)).toBeInTheDocument();
});