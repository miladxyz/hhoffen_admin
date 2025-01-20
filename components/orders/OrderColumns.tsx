"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "_id",
    header: "Order",
    cell: ({ row }) => {
      return (
        <Link
          href={`/orders/${row.original._id}`}
          className="hover:text-red-1"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "کاربر",
  },
  {
    accessorKey: "products",
    header: "محصولات",
  },
  {
    accessorKey: "totalAmount",
    header: "کل (تومان)",
  },
  {
    accessorKey: "createdAt",
    header: "تاریخ ایجاد",
  },
];
