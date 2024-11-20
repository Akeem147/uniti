
import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart"
import DateDisplay from "@/components/DateDisplay"

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

declare interface TotlaBalanceBoxProps {
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
  }
export default function TotalBalanceBox({
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart  />
      </div>
      <div className="flex flex-col gap-6">
        <DateDisplay/>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total current balance</p>
          <span className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </span>
        </div>
      </div>
    </section>
  );
}
