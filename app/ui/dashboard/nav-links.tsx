import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex gap-2 justify-center items-center p-3 text-sm font-medium bg-gray-50 rounded-md md:flex-none md:justify-start md:p-2 md:px-3 hover:text-blue-600 h-[48px] grow hover:bg-sky-100"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
