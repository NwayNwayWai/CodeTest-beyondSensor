'use client';
import { PropsWithChildren } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SWRConfig } from 'swr';

import fetcher from '@/lib/fetcher';
import { ThemeProvider } from '@/providers/theme';
import { Theme } from '@radix-ui/themes';
export default function Providers({ children }: PropsWithChildren) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Theme>
          {children}
          <ProgressBar
            height="4px"
            color="#3C47E7"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </Theme>
      </ThemeProvider>
    </SWRConfig>
  );
}
