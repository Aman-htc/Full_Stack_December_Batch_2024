


"use client";

import { useRouter } from "next/navigation";
import Teacher from "./Teachers";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem("idToken");
  
      if (!token) {
        router.push("/signin");
      }
    }, []);

  return(
     <Teacher />
  );
};

export default Page;