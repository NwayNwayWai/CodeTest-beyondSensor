import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/providers";
import { ServerThemeProvider } from "@wits/next-themes";

import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Toaster } from "react-hot-toast";
import ProtectLayout from "@/components/layout/ProtectLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beyond Sensor",
  description: "Code Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider>
      <html lang="en" className={inter.className}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <Providers>
            <ProtectLayout>{children}</ProtectLayout>
          </Providers>
          <Toaster
            position="bottom-center"
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #E6E9ED",
                fontSize: "12px",
                background: "#E6E9ED",
                borderRadius: 100,
                padding: "3px",
                color: "#2A3086",
              },
            }}
          />
        </body>
      </html>
    </ServerThemeProvider>
  );
}
