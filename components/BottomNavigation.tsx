"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // For Next.js 13+ App Directory
import { FaRegCreditCard } from "react-icons/fa";
import { RiHome6Line } from "react-icons/ri";
import { MdSend } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";

interface SidebarLink1 {
  imgURL: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  route: string;
  label: string;
}

// Define the sidebar links
export const sidebarLinks1: SidebarLink1[] = [
  {
    imgURL: RiHome6Line, // Home Icon from React Icons
    route: "/",
    label: "Home",
  },
  {
    imgURL: FaRegCreditCard,
    route: "/transaction-history",
    label: "Transactions",
  },
  {
    imgURL: MdSend,
    route: "/payment-transfer",
    label: "Transfer",
  },
  {
    imgURL: BiBuildingHouse,
    route: "/my-banks",
    label: "My Bank",
  },
  {
    imgURL: IoIosPaper,
    route: "/pay-bill",
    label: "Pay Bills",
  },
];

export default function BottomNavigation() {
  const [mounted, setMounted] = useState(false);
  const [showNav, setShowNav] = useState(true); // State to control visibility of nav
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const pathname = usePathname(); // Use usePathname for Next.js 13+ app directory

  useEffect(() => {
    // Ensure the component has mounted on the client side
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Hide navigation on scroll down
        setShowNav(false);
      } else {
        // Show navigation on scroll up
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!mounted) {
    // Prevent rendering until client-side mount
    return null;
  }

  // Function to determine active link class
  const getLinkClassName = (path: string) => {
    return pathname === path ? "text-blue-600" : "text-gray-700"; // Active or inactive class
  };

  return (
    <div
      className={`fixed lg:hidden bottom-0 left-0 w-full h-[70px] py-2 bg-white border-t border-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
        showNav ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-2">
        {sidebarLinks1.map(({ imgURL: Icon, route, label }) => (
          <Link
            key={route}
            href={route}
            className={`text-center flex-1 ${getLinkClassName(route)}`}
          >
            {Icon && <Icon className="mx-auto text-2xl font-bold w-[25px] h-[25px]" />}
            <div className="text-sm">{label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
