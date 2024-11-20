"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to the sign-in page if not logged in
      router.push("/sign-in");
    }
  }, [loading, user, router]);

  // If loading or no user, render nothing (this avoids showing the protected page)
  if (loading || !user) {
    return null;
  }

  return <>{children}</>; // Render the protected content if the user is authenticated
};

export default ProtectedRoute;
