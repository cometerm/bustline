import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeSlash, Trash } from "@phosphor-icons/react";

export default function PasswordCard({ credential, onDelete }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{credential.website}</CardTitle>
            <CardDescription>{credential.email}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePasswordVisibility}
              className="h-8 w-8 p-0"
            >
              {showPassword ? <EyeSlash size={16} /> : <Eye size={16} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(credential.id)}
              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
            >
              <Trash size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-muted rounded-md">
          <code className="text-sm font-mono">
            {showPassword ? credential.password : "••••••••••••••••"}
          </code>
        </div>
      </CardContent>
    </Card>
  );
}
