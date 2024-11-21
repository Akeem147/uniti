'use client'
import Link from 'next/link';
import ProtectedRoute from "@/components/ProtectedRoute";
import React, { useState } from 'react';

const MyBanksPage: React.FC = () => {
  // Sample data for transactions
  const transactions = [
    { id: 1, date: "2024-11-19", description: "Facebook Treasury Deposit", amount: 750000, type: "credit" },
    { id: 2, date: "2024-11-19", description: "Facebook Treasury Deposit", amount: 750000, type: "credit" },
    { id: 3, date: "2024-11-19", description: "Facebook Treasury Deposit", amount: 750000, type: "credit" },
    { id: 4, date: "2024-11-19", description: "Facebook Treasury Deposit", amount: 750000, type: "credit" },
  
  ];

  const [visibleTransactions, setVisibleTransactions] = useState(5);

  const showMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 5, transactions.length));
  };

  return (
   <ProtectedRoute>
     <div className="w-full h-auto md:px-3 lg:px-4 bg-slate-100 mb-[60px] lg:mb-0 pt-[70px] lg:pt-0">
      <div className="rounded-lg w-full max-w-[900px] p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4 mb-2">
          <h2 className="text-2xl font-bold text-gray-800">Account Details</h2>
          <button className="text-gray-400 hover:text-gray-600 text-2xl font-bold hidden">&times;</button>
        </div>

        {/* Account Details */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[16px] md:text-[17px] text-gray-600">Account Type: <span className="font-semibold text-gray-800">Savings</span></p>
              <p className="text-[16px] md:text-[17px] text-gray-600">Account Number: <span className="font-semibold text-gray-800">7890</span></p>
              <p className="text-[16px] md:text-[17px] text-gray-600">Routing Number: <span className="font-semibold text-gray-800">026009593</span></p>
            </div>
            <div className="text-right">
              <p className="text-[16px] md:text-lg text-gray-600">Available Balance</p>
              <p className="md:text-[20px] text-[16px] font-semibold text-green-600">$3000000</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Recent Transactions</h3>
          <div className="space-y-4">
            {transactions.slice(0, visibleTransactions).map((transaction, index) => (
              <div key={index} className="flex justify-between items-center py-3 bg-gray-100 rounded-lg">
                <div>
                  <p className="text-md font-medium text-gray-700">{transaction.date}</p>
                  <p className="text-lg text-gray-700">{transaction.description}</p>
                </div>
                <p className={`text-lg font-semibold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          {/* Show More Button */}
          {visibleTransactions < transactions.length && (
            <button 
              onClick={showMoreTransactions}
              className="mt-6 w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Show More
            </button>
          )}
        </div>

        {/* Transfer Funds Button */}
       <Link href={"/payment-transfer"}>
       <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Transfer Funds
        </button>
       </Link>
      </div>
    </div>
   </ProtectedRoute>
  );
};

export default MyBanksPage;
