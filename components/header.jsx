import { Badge } from "@/components/ui/badge";
import { Lock } from "@phosphor-icons/react";
import AddPassword from "./add-password";

export default function Header({ credentialsCount, onAddPassword }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="bg-primary text-primary-foreground"
          >
            {credentialsCount} passwords
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Lock size={16} />
            Encrypted
          </Badge>
        </div>
      </div>

      <AddPassword onAddPassword={onAddPassword} />
    </div>
  );
}
