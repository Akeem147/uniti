// pages/transfer.tsx
import TransferPage from "@/components/TransferForm";
import ProtectedRoute from "@/components/ProtectedRoute";

const PaymentTransfer = () => {
  return (
   <ProtectedRoute>
     <div className="h-auto bg-slate-100 md:px-4 px-2 lg:px-6 pt-[170px] sm:pt-[160px] lg:pt-[135px] md:pt-[30px] flex items-center justify-center">
      <TransferPage />
    </div>
   </ProtectedRoute>
  );
};

export default PaymentTransfer;