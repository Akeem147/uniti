import Sidebar from "@/components/Sidebar";
import BottomNavigation from "@/components/BottomNavigation";
import FixedHeader from "@/components/FixedHeader";
import ProtectedRoute from "@/components/ProtectedRoute";
const loggedIn = {
  firstName: "Paris Watson.",
  lastName: "Watson",
  email: "Waltsonparis22@gmail.com",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ProtectedRoute>
     <main className="flex h-auto w-full font-inter bg-slate-100 bg-opacity-5">
      <Sidebar />
      <div className="flex lg:ml-[210px] w-full flex-col ">
        <FixedHeader/>
        {children}
      </div>
      <BottomNavigation />
    </main>
   </ProtectedRoute>
  );
}
