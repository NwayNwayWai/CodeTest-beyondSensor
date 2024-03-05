"use client";
import React, { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Icons, Image } from "@/components/ui/images";
import { Text } from "@/components/ui/typo";
import { menuList } from "@/data/Menu";
import { cn } from "@/utils/cn";
import { Box, Flex, Grid } from "@radix-ui/themes";

const SideBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [transactionExpand, setTransactionExpand] = useState(false);
  const [reportExpand, setReportExpand] = useState(false);
  const [collapse, setCollapse] = useState(false);

  console.log(transactionExpand);

  return (
    <Box className="overflow-auto h-full">
      <header className="h-full w-full border-r border-r-blue-200">
        <Grid
          className={cn(
            collapse ? "w-[90px]" : "w-[300px]",
            " px-[16px] py-[32px] bg-white"
          )}
        >
          {menuList.map((each, key) => (
            <Box
              key={key}
              className="cursor-pointer"
              onClick={() => {
                if (each.name == "Transactions") {
                  setTransactionExpand(!transactionExpand);
                } else {
                  if (each.name == "Dashboard") {
                    router.push(each.path);
                  } else {
                    return;
                  }
                }
              }}
            >
              <Flex
                className={cn(
                  transactionExpand && each.parent == "transactions"
                    ? "hidden"
                    : "",
                  reportExpand && each.parent == "reports" ? "hidden" : "",
                  pathname === each.path
                    ? "text-white bg-primary"
                    : "text-primary bg-white",
                  "p-[16px] rounded font-medium"
                )}
                align="center"
                justify="between"
              >
                <Flex align="center" gap="3">
                  {pathname === each.path ? each.activeIcon : each.icon}
                  {!collapse && (
                    <Text className="text-[16px]">{each.name}</Text>
                  )}
                </Flex>
                {!collapse &&
                  each.dropdown &&
                  (transactionExpand && each.name == "Transactions" ? (
                    <Icons.dropDownArrow className="w-[24px] h-[24px] text-primary" />
                  ) : reportExpand && each.name == "Reports" ? (
                    <Icons.dropDownArrow className="w-[24px] h-[24px] text-primary" />
                  ) : (
                    <Icons.dropUpArrow className="w-[24px] h-[24px] text-primary" />
                  ))}
              </Flex>
            </Box>
          ))}
          <Flex
            justify="between"
            align="center"
            className=" p-[16px] border border-blue-200 rounded mb-[40px]"
            onClick={() => setCollapse(!collapse)}
          >
            {!collapse && (
              <Text className="text-[16px] text-primary">Collapse</Text>
            )}
            <Image
              src={
                !collapse
                  ? "/upload/icons/side_bar_expand_icon.svg"
                  : "/upload/icons/side_bar_collapse_icon.svg"
              }
              width={28}
              height={28}
              alt="home"
            />
          </Flex>
        </Grid>
      </header>
    </Box>
  );
};

export default SideBar;
