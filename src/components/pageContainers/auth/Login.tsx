"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import authApiService from "@/app/api/authApiService";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Image } from "@/components/ui/images";
import { InputText } from "@/components/ui/input/inputText";
import { Text } from "@/components/ui/typo";
import { IResponse, LoginResponse } from "@/types/response";
import { setUserInfo } from "@/utils/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Flex, Section } from "@radix-ui/themes";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required!")
    .email("Enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
const Login = () => {
  const router = useRouter();
  const form = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [passShow, setPassShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await authApiService.login(data);
      if (response.status === 200) {
        const successResponse = response.data as LoginResponse;
        console.log(successResponse.accessToken);
        setUserInfo(successResponse.accessToken, successResponse.data);
        router.replace("/dashboard");
        setLoading(false);
      } else {
        const errorResponse = response.data as IResponse;
        form.setError("password", {
          type: "manual",
          message: errorResponse.message,
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setLoading(false);
    }
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="bg-primary h-screen w-screen"
      gap="8"
    >
      <Image
        src={"/upload/images/beyond_logo.jpeg"}
        width={140}
        height={140}
        alt="Logo Picture"
      />
      <Box className="bg-white px-[30px] py-[50px] w-[500px] rounded-lg">
        <Text className="text-center text-[24px] font-bold text-primary">
          Sign In To Your Account
        </Text>
        <Text className="text-center text-gray-100 text-[20px] pt-5">
          Sign in to manage your Beyond Sensor
        </Text>
        <Text className="text-center text-gray-100 text-[20px] pt-2">
          Admin Dashboard
        </Text>

        <Form {...form}>
          <form
            className="flex-1 pt-[50px]"
            onSubmit={form.handleSubmit(submit)}
          >
            <Section py="0" px="0" className="mb-4">
              <Text className="font-semibold font-[14px] pb-1">Email</Text>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputText
                        label="Email"
                        {...field}
                        placeholder="Enter your email address"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Section>
            <Section py="0" px="0" className="pb-[30px]">
              <Text className="font-semibold font-[14px] pb-1">Password</Text>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputText
                        label="Password"
                        {...field}
                        placeholder="Enter your password"
                        type={passShow ? "text" : "password"}
                        isPassword
                        passShow={passShow}
                        setPassShow={setPassShow}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Section>
            <div
              className="cursor-pointer"
              onClick={() => {
                router.push("/forget-pass");
              }}
            >
              <Text className="text-red-700 text-right">Forget Password?</Text>
            </div>

            <Button
              type="submit"
              className="mt-4 w-full h-[50px]"
              disabled={!form.formState.isValid || loading}
            >
              <Text className="text-white font-semibold">
                {loading ? "loading..." : "Sign In"}
              </Text>
            </Button>
          </form>
        </Form>
      </Box>
    </Flex>
  );
};

export default Login;
