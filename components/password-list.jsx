import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PasswordCard from "./password-card";
import AddPasswordDialog from "./add-password";

export default function PasswordList({
  credentials,
  onDeleteCredential,
  onAddPassword,
}) {
  if (credentials.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">No passwords saved yet</h3>
            <p className="text-muted-foreground">
              Get started by adding your first password to the vault
            </p>
          </div>
          <AddPasswordDialog
            onAddPassword={onAddPassword}
            trigger={<Button className="mt-4">Add Your First Password</Button>}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">Your Passwords</h2>
      <div className="grid gap-4">
        {credentials.map((credential) => (
          <PasswordCard
            key={credential.id}
            credential={credential}
            onDelete={onDeleteCredential}
          />
        ))}
      </div>
    </div>
  );
}
