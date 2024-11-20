import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "@/components/BankCard"

declare type User = {
    email: string;
    firstName: string;
    lastName: string;
  };

  declare type Transaction = {
    id: string;
    $id: string;
    name: string;
    paymentChannel: string;
    type: string;
    accountId: string;
    amount: number;
    pending: boolean;
    category: string;
    date: string;
    image: string;
    $createdAt: string;
    channel: string;
    senderBankId: string;
    receiverBankId: string;
  };

  declare type Bank = {
    $id: string;
    accountId: string;
    bankId: string;
    accessToken: string;
    fundingSourceUrl: string;
    userId: string;
    shareableId: string;
    currentBalance: number;
  };

  declare type Account = {
    id: string;
    availableBalance: number;
    currentBalance: number;
    officialName: string;
    mask: string;
    institutionId: string;
    name: string;
    type: string;
    subtype: string;
    appwriteItemId: string;
    shareableId: string;
  };

declare interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: (Partial<Bank> & Partial<Account>)[]; 
  }
export default function RightSidebar({
  user,
  banks,
}: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">Credit cards</h2>
          <Link className="flex gap-2" href={"/"}>
            <Image src="/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
             <BankCard />
            </div>
         
          </div>
        )}
      </section>
    </aside>
  );
}
