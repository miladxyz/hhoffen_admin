"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "آی‌دی",
  },
  {
    accessorKey: "name",
    header: "نام",
  },
  {
    accessorKey: "email",
    header: "ایمیل",
  },
];
