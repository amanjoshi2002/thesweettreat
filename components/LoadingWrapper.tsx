"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import LoaderStyle from "@/components/Loader/Loader.style";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoaderStyle />
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}