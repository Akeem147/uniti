"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { FC, useState } from "react";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "debit" | "credit";
}

// Transactions array defined here
const transactions: Transaction[] = [
  { id: 1, date: "2024-11-06", description: "Facebook Treasury Deposit", amount: 3000000, type: "credit" },

];

const RecentTransactionsWithShowMore: FC = () => {
  const [visibleTransactions, setVisibleTransactions] = useState(8);

  const showMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 8, transactions.length));
  };

  return (
   <ProtectedRoute>
     <div className="w-full flex flex-col justify-between md:gap-[55px] pt-[90px] lg:pt-5 min-h-screen md:px-5 px-4 pb-10 lg:px-5 bg-slate-100 rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recent Transactions
        </h2>
        <ul className="divide-y divide-gray-200">
          {transactions.slice(0, visibleTransactions).map((transaction) => (
            <li
              key={transaction.id}
              className="py-4 flex items-center gap-4 justify-between"
            >
              <div>
                <p className="text-gray-700 font-medium">
                  {transaction.description}
                </p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
              <div
                className={`text-sm font-semibold mb-3 ${
                  transaction.type === "credit"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "debit" ? "-" : "+"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Show More Button */}
      {visibleTransactions < transactions.length && (
        <button
          onClick={showMoreTransactions}
          className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-300 my-4"
        >
          Show More
        </button>
      )}
    </div>
   </ProtectedRoute>
  );
};

export default RecentTransactionsWithShowMore;
