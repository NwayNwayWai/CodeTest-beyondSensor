"use client";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/typo";

import { Box, Flex } from "@radix-ui/themes";
import { logout } from "@/utils/auth";

interface HeaderProps {
  backRoute?: string | boolean;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ backRoute }: HeaderProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleRouteChange = () => {
    startTransition(() => {
      if (typeof backRoute === "string") {
        router.replace(backRoute);
      } else {
        router.back();
      }
    });
  };

  return (
    <Box className="relative z-1000">
      <header className="w-full h-[60px]">
        <Flex
          justify="between"
          align="center"
          className="w-full h-full bg-gradient-to-b from-primary to-blue-700 px-[24px]"
        >
          <h1 className="text-white"> Beyond Sensor</h1>
          <Box>
            <Flex align="center">
              <Button
                onClick={() => {
                  router.replace("/login");
                  logout();
                }}
                type="submit"
                className="w-full h-[30px]"
              >
                <Text className="text-white font-semibold">logout</Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </header>
    </Box>
  );
};

export default Header;
