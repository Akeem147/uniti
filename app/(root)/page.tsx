import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RecentTransact from "@/components/RecentTransact"
import RightSidebar from "@/components/RightSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  const loggedIn = { firstName: "Paris Watson.", lastName: "Watson",  email: "Parisw746@gmail.com"};
  return (
   <ProtectedRoute>
    <div>
     <section className="home">
       
       <div className="home-content">
         <header className="home-header">
           <HeaderBox
             type="greeting"
             title="Welcome,"
             user={loggedIn?.firstName || "Guest"}
             subtext="Access and manage your accounts and transactions efficiently"
           />
           <TotalBalanceBox
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={3000000}
           />
         </header>
         <RecentTransact/>
       </div>
     </section>
     <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 1320}]}/>
   </div>
   </ProtectedRoute>
  );
}
