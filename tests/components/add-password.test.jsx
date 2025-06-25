import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddPassword from "@/components/add-password";

// Mock the dependencies, not the component itself
vi.mock("@/components/ui/dialog", () => ({
  Dialog: ({ children, open }) =>
    open ? <div data-testid="dialog">{children}</div> : null,
  DialogTrigger: ({ children }) => <div data-testid="trigger">{children}</div>,
  DialogContent: ({ children }) => <div>{children}</div>,
  DialogHeader: ({ children }) => <div>{children}</div>,
  DialogTitle: ({ children }) => <h2>{children}</h2>,
  DialogDescription: ({ children }) => <p>{children}</p>,
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, type }) => (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  ),
}));

vi.mock("@/components/ui/input", () => ({
  Input: (props) => <input {...props} />,
}));

vi.mock("@/components/ui/label", () => ({
  Label: ({ children }) => <label>{children}</label>,
}));

vi.mock("@phosphor-icons/react", () => ({
  Plus: () => <span>+</span>,
}));

describe("AddPassword", () => {
  const mockOnAddPassword = vi.fn();

  it("renders without errors", () => {
    const { container } = render(
      <AddPassword onAddPassword={mockOnAddPassword} />
    );
    expect(container).toBeDefined();
  });

  it("accepts onAddPassword prop", () => {
    expect(() => {
      render(<AddPassword onAddPassword={mockOnAddPassword} />);
    }).not.toThrow();
  });
});
