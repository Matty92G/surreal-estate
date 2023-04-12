import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders Surreal Estate h2 header", () => {
    render(<App />);
    const linkElement = screen.getByText(/Surreal Estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
