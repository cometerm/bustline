import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PasswordList from "@/components/password-list";

// Mock child components
vi.mock("@/components/password-card", () => ({
  default: ({ credential, onDelete }) => (
    <div data-testid={`password-card-${credential.id}`}>
      {credential.website}
    </div>
  ),
}));

vi.mock("@/components/add-password", () => ({
  default: ({ trigger }) => trigger || <button>Add Password</button>,
}));

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }) => <div>{children}</div>,
  CardContent: ({ children }) => <div>{children}</div>,
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children }) => <button>{children}</button>,
}));

describe("PasswordList", () => {
  const mockOnDelete = vi.fn();
  const mockOnAdd = vi.fn();

  it("shows empty state when no credentials", () => {
    render(
      <PasswordList
        credentials={[]}
        onDeleteCredential={mockOnDelete}
        onAddPassword={mockOnAdd}
      />
    );

    expect(screen.getByText("No passwords saved yet")).toBeDefined();
    expect(screen.getByText("Add Your First Password")).toBeDefined();
  });

  it("renders password cards when credentials exist", () => {
    const credentials = [
      { id: 1, website: "GitHub", email: "test1@example.com" },
      { id: 2, website: "Gmail", email: "test2@example.com" },
    ];

    render(
      <PasswordList
        credentials={credentials}
        onDeleteCredential={mockOnDelete}
        onAddPassword={mockOnAdd}
      />
    );

    expect(screen.getByText("Your Passwords")).toBeDefined();
    expect(screen.getByTestId("password-card-1")).toBeDefined();
    expect(screen.getByTestId("password-card-2")).toBeDefined();
  });
});
