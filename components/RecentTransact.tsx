"use client"
import { FC, useState } from "react";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "debit" | "credit";
}

const transactions: Transaction[] = [
  { id: 1, date: "2024-11-06", description: "Facebook Treasury Deposit", amount: 3000000, type: "credit" },
];

const RecentTransact: FC = () => {
  const [visibleTransactions, setVisibleTransactions] = useState(5);

  const showMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 5, transactions.length));
  };

  return (
    <div className="w-full h-auto md:px-5 px-4 lg:px-5  bg-slate-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.slice(0, visibleTransactions).map((transaction) => (
          <li key={transaction.id} className="py-4 flex items-center gap-4 justify-between">
            <div>
              <p className="text-gray-700 font-medium">{transaction.description}</p>
              <p className="text-gray-500 text-sm">{transaction.date}</p>
            </div>
            <div
              className={`text-sm font-semibold mb-3 ${
                transaction.type === "credit" ? "text-green-600" : "text-red-600"
              }`}
            >
              {transaction.type === "debit" ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      {/* Show More Button */}
      {visibleTransactions < transactions.length && (
        <button 
          onClick={showMoreTransactions}
          className="mt-6 lg:mb-6 mb-[60px] md:mb-10 w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default RecentTransact;
