import { Image } from "@/components/ui/images";

export interface Menu {
  name: string;
  icon: JSX.Element;
  activeIcon?: JSX.Element;
  path: string;
  dropdown?: boolean;
  parent?: string;
}

export const menuList: Menu[] = [
  {
    name: "Dashboard",
    icon: (
      <Image
        src="/upload/icons/dashboard_inactive_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    activeIcon: (
      <Image
        src="/upload/icons/dashboard_active_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    path: "/dashboard",
    dropdown: false,
    parent: "",
  },
  {
    name: "Transactions",
    icon: (
      <Image
        src="/upload/icons/transactions_inactive_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    activeIcon: (
      <Image
        src="/upload/icons/dashboard_active_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    path: "#",
    dropdown: true,
    parent: "",
  },
  {
    name: "Cash In",
    icon: (
      <Image
        src="/upload/icons/dot_inactive_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    activeIcon: (
      <Image
        src="/upload/icons/dot_active_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    path: "#",
    dropdown: false,
    parent: "transactions",
  },
  {
    name: "Cash Out",
    icon: (
      <Image
        src="/upload/icons/dot_inactive_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    activeIcon: (
      <Image
        src="/upload/icons/dot_active_icon.svg"
        width={28}
        height={28}
        alt="home"
      />
    ),
    path: "#",
    dropdown: false,
    parent: "transactions",
  },
];
