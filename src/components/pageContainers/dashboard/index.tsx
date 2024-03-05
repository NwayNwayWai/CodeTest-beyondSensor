"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import SubHeader from "@/components/layout/SubHeader";
import { CurrencyFormat } from "@/components/shared/CurrencyFormat";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/images";
import { Text } from "@/components/ui/typo";
import { cn } from "@/utils/cn";
import { Box, Flex, Grid } from "@radix-ui/themes";
import ConvertStatusLabel from "@/components/shared/ConvertStatusLabel";
import Pagination from "@/components/ui/pagination";

const Dashboard = () => {
  const router = useRouter();

  const [query, setQuery] = useState({
    page: 1,
    pagePerCount: 20,
    keyword: "",
  });

  const handlePageChange = (page: number) => {
    console.log(page);
    setQuery({ page: page, pagePerCount: 20, keyword: query.keyword });
  };

  const handleSearch = (search: string) => {
    setQuery({ page: 1, pagePerCount: 20, keyword: search });
  };

  const DashboardContainer = ({ color = "", amount = "", status = "" }) => {
    return (
      <Flex
        align="center"
        className={cn(color, "h-[85px] rounded-lg shadow-md")}
      >
        <Flex className="px-[16px]">
          <Grid justify="between" gap="1" className="pl-[6px]">
            <Text className="font-medium text-[20px]">
              {status == "Cash In" ? "+" : status == "Cash Out" ? "-" : ""}
              {amount} {status == "Cash In" || status == "Cash Out" ? "Ks" : ""}
            </Text>
            <Text className=" text-[12px]">
              {status == "Cash In" ||
              status == "Cash Out" ||
              status == "New Users"
                ? "Today"
                : "Total"}{" "}
              {status}
            </Text>
          </Grid>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box className="h-full">
      <SubHeader title="Dashboard" />
      <Box className="p-[24px] overflow-auto h-full">
        <Grid columns="5" gap="4">
          <DashboardContainer
            color="bg-orange-100"
            amount={CurrencyFormat(200000)}
            status="Cash In"
          />
          <DashboardContainer
            color="bg-green-100"
            amount={CurrencyFormat(200000)}
            status="Cash Out"
          />
          <DashboardContainer
            color="bg-purple-100"
            amount={CurrencyFormat(200)}
            status="Users"
          />
          <DashboardContainer
            color="bg-blue-50"
            amount={CurrencyFormat(200)}
            status="New Users"
          />
          <DashboardContainer
            color="bg-red-100"
            amount={CurrencyFormat(120)}
            status="Active Users"
          />
        </Grid>

        <Box className="pt-[20px]">
          <Grid className="h-full w-full" gap="2">
            <Flex className="w-full" justify="between" align="center">
              <Text className="text-[18px] text-primary font-medium">
                Latest Cash Out
              </Text>
              <Button variant="outline">
                <Text className="text-blue-800 font-medium pr-[8px]">
                  View Detail
                </Text>
                <Image
                  src="/upload/icons/arrow_right.svg"
                  width={20}
                  height={20}
                  alt="Right Arrow Image"
                />
              </Button>
            </Flex>
            <Box className="border border-blue-300 rounded-md">
              <table className="table-fixed w-full">
                <thead>
                  <tr className="w-full bg-secondary">
                    <th className="font-semibold text-center text-primary text-[12px] py-6 w-[50px]">
                      No
                    </th>
                    <th className="font-semibold text-left text-primary text-[12px] py-6 w-[15%] pl-4">
                      Request ID
                    </th>
                    <th className="font-semibold text-left text-primary text-[12px] py-6 pl-4 w-[20%]">
                      Request Time
                    </th>
                    <th className="font-semibold text-left text-primary text-[12px] py-6 w-[15%] pl-4">
                      User ID
                    </th>
                    <th className="font-semibold text-left text-primary text-[12px] py-6 w-[15%] pl-4">
                      Name
                    </th>
                    <th className="font-semibold text-right text-primary text-[12px] py-6 w-[20%] pr-4">
                      Amount & Units
                    </th>
                    <th className="font-semibold text-left text-primary text-[12px] py-6 w-[15%] pl-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 20 }, (v, k) => k).map((item, key) => (
                    <tr
                      key={key}
                      className={cn(
                        key % 2 != 0 ? "bg-gray-300" : "",
                        "border-b border-blue-300"
                      )}
                    >
                      <td className=" text-center text-gray-700 text-[14px] py-3">
                        {key + 1}
                      </td>
                      <td className=" text-left text-gray-700 text-[14px] py-3 pl-4 text-ellipsis truncate">
                        11-202
                      </td>
                      <td className=" text-left text-gray-700 text-[14px] py-3 pl-4">
                        {dayjs().format("MMM DD, YYYY hh:mm:ss A")}
                      </td>
                      <td className=" text-left text-gray-700 text-[14px] py-3 pl-4 text-ellipsis truncate">
                        USE0001
                      </td>
                      <td className=" text-left  py-3 pl-4">
                        <Text className="font-medium text-gray-700 text-[14px] text-ellipsis truncate">
                          Nway Nway Wai
                        </Text>
                        <Text className="text-gray-200 text-[13px] text-ellipsis truncate">
                          nwaywai02@gmail.com
                        </Text>
                      </td>
                      <td className=" text-right  py-3 pr-4">
                        <Text className="font-medium text-gray-700 text-[14px] text-ellipsis truncate">
                          {CurrencyFormat(1000) + "Ks"}
                        </Text>
                      </td>

                      <td className=" text-gray-700 py-3 pr-[16px]">
                        <ConvertStatusLabel
                          status={key % 2 == 0 ? "paid" : "unpaid"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Grid>
        </Box>

        <Pagination
          itemsPerPage={4}
          page={query.page}
          onPageChange={handlePageChange}
        />

        <Box className="h-[124px]" />
      </Box>
    </Box>
  );
};

export default Dashboard;
