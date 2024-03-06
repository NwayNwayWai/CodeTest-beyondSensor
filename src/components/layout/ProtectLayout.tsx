"use client";
import React, { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { getToken } from "@/utils/auth";
import { Section } from "@radix-ui/themes";

interface Props {
  children: React.ReactNode;
}

const ProtectLayout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      toast("session expired");
      startTransition(() => router.replace("/login"));
    }
  }, [router]);

  return (
    <>
      <Section className=" p-0">{children}</Section>
    </>
  );
};

export default ProtectLayout;
