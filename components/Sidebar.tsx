"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

import { TbLogout } from "react-icons/tb";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const logOut = () => {
    
    router.push("/sign-in");
  };

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4 bg-slate-100 bg-opacity-5">
        <Link
          className="mb-12 cursor-pointer items-center gap-2 flex pt-1"
          href={"/"}
        >
          <Image
              src="/logo.svg"
              alt="Logo"
              className=""
              width={30}
              height={30}
            />
          <h1 className="sidebar-logo">Uniti bank</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              key={item.label}
              href={item.route}
            >
              <div className="relative size-5">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto p-4 flex flex-col items-start">
        <div className="flex items-center gap-1">
          <div className="text-black bg-gray-200 w-10 h-10 rounded-full items-center justify-center flex font-medium">
          <Image
            className="rounded-[50%] object-cover w-8 h-8"
            src={"/patson.jpg"}
            width={24}
            height={24}
            alt="img"
          />
          </div>

          <div className="text-black mb-2">
            <h5 className="text-black font-semibold text-sm">Paris Watson</h5>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-2 flex items-center gap-2 text-black"
        >
          <span className="font-semibold">Logout</span>
          <TbLogout size={25} />
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed right-0 left-0 top-0 bottom-0 inset-0 bg-[#191919] bg-opacity-50 flex justify-center items-center h-screen w-full">
          <div className="bg-slate-100 rounded-lg p-6 w-96 shadow-lg">
            <div className="text-center">
              <p className="text-black"> Are you sure you want to sign out? You’ll need to log in again to access your account.</p>
              <div className="flex mt-4 justify-center gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={logOut}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
