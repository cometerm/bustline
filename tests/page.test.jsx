import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordVault from "@/app/page.jsx";

// Mock the child components
vi.mock("@/components/header", () => ({
  default: ({ credentialsCount, onAddPassword }) => (
    <div>
      <span>Count: {credentialsCount}</span>
      <button onClick={() => onAddPassword({ id: 1, website: "Test" })}>
        Add
      </button>
    </div>
  ),
}));

vi.mock("@/components/password-list", () => ({
  default: ({ credentials, onDeleteCredential }) => (
    <div>
      <span>Total: {credentials.length}</span>
      {credentials.map((cred) => (
        <button key={cred.id} onClick={() => onDeleteCredential(cred.id)}>
          Delete {cred.id}
        </button>
      ))}
    </div>
  ),
}));

describe("PasswordVault", () => {
  it("renders with empty state", () => {
    render(<PasswordVault />);

    expect(screen.getByText("Count: 0")).toBeDefined();
    expect(screen.getByText("Total: 0")).toBeDefined();
  });

  it("adds and deletes passwords", async () => {
    const user = userEvent.setup();
    render(<PasswordVault />);

    // Add password
    await user.click(screen.getByText("Add"));
    expect(screen.getByText("Count: 1")).toBeDefined();

    // Delete password
    await user.click(screen.getByText("Delete 1"));
    expect(screen.getByText("Count: 0")).toBeDefined();
  });
});
