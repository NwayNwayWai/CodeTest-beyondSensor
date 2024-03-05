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
import toast from "react-hot-toast";

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
const ChangePass = () => {
  const router = useRouter();
  const form = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    toast("You can't change password coz we need to connect with BE");
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
          Change Password
        </Text>
        <Text className="text-center text-gray-100 text-[15px] pt-5">
          Enter a new password below to change your password
        </Text>

        <Form {...form}>
          <form
            className="flex-1 pt-[50px]"
            onSubmit={form.handleSubmit(submit)}
          >
            <Section py="0" px="0" className="pb-[30px]">
              <Text className="font-semibold font-[14px] pb-1">
                New Password
              </Text>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputText
                        label="Password"
                        {...field}
                        placeholder="Enter your new password"
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
            <Section py="0" px="0" className="pb-[30px]">
              <Text className="font-semibold font-[14px] pb-1">
                Confirm Password
              </Text>
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputText
                        label="Confirm Password"
                        {...field}
                        placeholder="Confirm your password"
                        type={confirmPassShow ? "text" : "password"}
                        isPassword
                        passShow={confirmPassShow}
                        setPassShow={setConfirmPassShow}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Section>
            <div
              onClick={() => {
                router.push("/login");
              }}
            >
              <Button
                type="submit"
                className="mt-4 w-full h-[50px]"
                disabled={!form.formState.isValid || loading}
              >
                <Text className="text-white font-semibold">
                  {loading ? "loading..." : "Change password"}
                </Text>
              </Button>
            </div>
          </form>
        </Form>
      </Box>
    </Flex>
  );
};

export default ChangePass;
