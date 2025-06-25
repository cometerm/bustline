"use client";

import { useState } from "react";
import Header from "@/components/header";
import PasswordList from "@/components/password-list";

export default function PasswordVault() {
  const [credentials, setCredentials] = useState([]);

  const handleAddPassword = (newCredential) => {
    setCredentials((prev) => [...prev, newCredential]);
  };

  const handleDeleteCredential = (id) => {
    setCredentials((prev) => prev.filter((cred) => cred.id !== id));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header
          credentialsCount={credentials.length}
          onAddPassword={handleAddPassword}
        />

        <PasswordList
          credentials={credentials}
          onDeleteCredential={handleDeleteCredential}
          onAddPassword={handleAddPassword}
        />
      </div>
    </div>
  );
}
