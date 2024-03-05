"use client";
import React, { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Image } from "@/components/ui/images";
import { getToken } from "@/utils/auth";
import toast from "react-hot-toast";

const Splash: React.FC = () => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      const token = getToken();
      console.log(token);

      if (token) {
        toast("welcome back");
        startTransition(() => router.replace("/dashboard"));
      } else {
        startTransition(() => router.replace("/login"));
      }
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);
  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <Image
        src={"/upload/images/beyond_logo.jpeg"}
        width={300}
        height={300}
        alt="Logo Picture"
      />
    </div>
  );
};

export default Splash;
