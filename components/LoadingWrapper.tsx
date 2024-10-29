"use client";

import { useEffect, useState, ReactNode } from "react";
import Loader from "@/components/Loader/Loader";
import LoaderStyle from "@/components/Loader/Loader.style";

export default function LoadingWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
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