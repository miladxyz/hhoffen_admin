import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "داشبورد",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "کالکشن ها",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "محصولات",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "سفارشات",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "کاربران",
  },
];
