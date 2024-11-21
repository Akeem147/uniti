"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdSend } from "react-icons/md";

const TransferPage = () => {
  const [fromAccount, setFromAccount] = useState("Checking");
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [toRoutingNumber, setToRoutingNumber] = useState("");
  const [toBankName, setToBankName] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmTransfer = () => {
    setShowConfirmation(false);
    setShowPaymentModal(true);
  };

  const handleProceedPayment = () => {
    setShowPaymentModal(false);
    router.push("/"); // Redirect to the home page or payment page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full mb-[80px] md:mb-0">
      <div className="w-full rounded-lg p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Transfer Funds
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            From Account
          </label>
          <select
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Checking">Checking - $750,000</option>
            <option value="Savings">Savings - $750,000</option>
          </select>

          <label className="block text-gray-700 font-medium mb-2">
            To Account Number
          </label>
          <input
            type="number"
            value={toAccountNumber}
            onChange={(e) => setToAccountNumber(e.target.value)}
            placeholder="Recipient Account Number"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            To Routing Number
          </label>
          <input
            type="number"
            value={toRoutingNumber}
            onChange={(e) => setToRoutingNumber(e.target.value)}
            placeholder="Recipient Routing Number"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Bank Name
          </label>
          <input
            type="text"
            value={toBankName}
            onChange={(e) => setToBankName(e.target.value)}
            placeholder="Recipient Bank Name"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Recipient Email
          </label>
          <input
            type="email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            placeholder="Recipient Email"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Enter amount"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Memo (Optional)
          </label>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Memo for the recipient"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-gray-700 font-medium mb-2">
            Transfer Date
          </label>
          <input
            type="date"
            value={transferDate}
            onChange={(e) => setTransferDate(e.target.value)}
            className="w-full p-2 mb-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Money
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed w-full h-screen inset-0 bg-[#191919] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-lg font-bold ">Confirm Transfer</h2>
              <MdSend size={25}/>
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to send <strong>${amount}</strong> to the
              account ending in <strong>{toAccountNumber.slice(-4)}</strong> at{" "}
              <strong>{toBankName}</strong>?
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleConfirmTransfer}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed w-full h-screen inset-0 bg-[#191919] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">
              Complete Your Lottery Claim
            </h2>
            <p className="text-gray-700 mb-6">
              To finalize your transfer, a fee of <strong>$2000</strong> is
              required. Please proceed to make the payment and return here to
              complete the process.
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleProceedPayment}
              >
                Contact agent to make payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferPage;
