"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Image } from "@/components/ui/images";
import { InputText } from "@/components/ui/input/inputText";
import { Text } from "@/components/ui/typo";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Flex, Section } from "@radix-ui/themes";
import { ForgetPassResponse, IResponse } from "@/types/response";
import authApiService from "@/app/api/authApiService";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required!")
    .email("Enter a valid email address"),
});
const ForgetPass = () => {
  const router = useRouter();
  const form = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [loading, setLoading] = useState(false);

  const submit = async (data: { email: string }) => {
    setLoading(true);
    try {
      const response = await authApiService.forgetPassword(data);
      if (response.status === 200) {
        const successResponse = response.data as ForgetPassResponse;
        router.push("/change-pass");
        setLoading(false);
      } else {
        const errorResponse = response.data as IResponse;
        form.setError("email", {
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
        <Text className="text-center text-[35px] font-bold text-primary">
          Forget Password?
        </Text>
        <Text className="text-center text-gray-100 text-[15px] pt-5">
          Sign in with your email instead, no password needed!
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

            <Button
              type="submit"
              className="mt-4 w-full h-[50px]"
              disabled={!form.formState.isValid || loading}
            >
              <Text className="text-white font-semibold">
                {loading ? "loading..." : "Continue"}
              </Text>
            </Button>
          </form>
        </Form>
      </Box>
    </Flex>
  );
};

export default ForgetPass;
