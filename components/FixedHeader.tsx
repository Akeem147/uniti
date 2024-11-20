'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

export default function FixedHeader() {
    const router = useRouter();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const handleLogout = () => {
        setShowLogoutModal(true);
      };

      const logOut = () => {
        setShowLogoutModal(false)
         router.push("/sign-in")
      }
    
  return (
    <div className="lg:hidden bg-slate-100 fixed top-0 left-0 right-0 flex items-center justify-between px-3 h-[70px] shadow-sm">
      <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <h2 className="text-black text-xl font-medium">Uniti Bank</h2>
        </Link>
        <button
          onClick={handleLogout}
          className="font-medium flex items-center gap-2"
        >
          <Image
            className="rounded-[50%] object-cover w-8 h-8"
            src={"/patson.jpg"}
            width={24}
            height={24}
            alt="img"
          />
          <span>Sign Out</span>
        </button>
        {showLogoutModal && (
  <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex justify-center items-center h-screen w-full">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-[90%]">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Confirm Sign Out
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to sign out? You’ll need to log in again to access your account.
        </p>
      </div>
      
      {/* Buttons */}
      <div className="flex justify-between gap-4 mt-6">
        <button
          className="flex-1 py-2 px-4 bg-gray-100 text-gray-600 font-medium rounded-lg hover:bg-gray-200 transition duration-150"
          onClick={() => setShowLogoutModal(false)}
        >
          Cancel
        </button>
        <button
          className="flex-1 py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-150"
          onClick={logOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
)}
      </div>
  )
}
