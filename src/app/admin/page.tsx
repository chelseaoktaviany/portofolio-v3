import React from "react";
import { cookies } from "next/headers";

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      <p>Here is form CRUD for admin role</p>
    </div>
  );
}
