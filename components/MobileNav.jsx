"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "resume",
    path: "/resume",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <CiMenuFries className="text-[32px] text-accent "></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col justify-center items-center gap-8 mt-20">
          {links.map((link, idx) => {
            return (
              <Link
                href={link.path}
                key={idx}
                className={`${
                  link.path === pathname &&
                  "text-accent boarder-b-2 boarder-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
