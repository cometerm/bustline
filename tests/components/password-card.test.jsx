import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordCard from "@/components/password-card";

// Mock the UI components
vi.mock("@/components/ui/card", () => ({
  Card: ({ children }) => <div data-testid="card">{children}</div>,
  CardHeader: ({ children }) => <div>{children}</div>,
  CardContent: ({ children }) => <div>{children}</div>,
  CardTitle: ({ children }) => <h3>{children}</h3>,
  CardDescription: ({ children }) => <p>{children}</p>,
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

vi.mock("@phosphor-icons/react", () => ({
  Eye: () => <span>👁️</span>,
  EyeSlash: () => <span>🙈</span>,
  Trash: () => <span>🗑️</span>,
}));

describe("PasswordCard", () => {
  const mockCredential = {
    id: 1,
    website: "GitHub",
    email: "test@example.com",
    password: "secret123",
  };

  const mockOnDelete = vi.fn();

  it("renders password card with credential info", () => {
    render(
      <PasswordCard credential={mockCredential} onDelete={mockOnDelete} />
    );

    expect(screen.getByText("GitHub")).toBeDefined();
    expect(screen.getByText("test@example.com")).toBeDefined();
    expect(screen.getByText("••••••••••••••••")).toBeDefined();
  });

  it("toggles password visibility when eye button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <PasswordCard credential={mockCredential} onDelete={mockOnDelete} />
    );

    const toggleButton = screen.getByText("👁️").closest("button");
    await user.click(toggleButton);

    expect(screen.getByText("secret123")).toBeDefined();
    expect(screen.getByText("🙈")).toBeDefined();
  });

  it("calls onDelete when delete button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <PasswordCard credential={mockCredential} onDelete={mockOnDelete} />
    );

    const deleteButton = screen.getByText("🗑️").closest("button");
    await user.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});
