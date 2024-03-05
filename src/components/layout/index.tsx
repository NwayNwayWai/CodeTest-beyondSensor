'use client';
import React from 'react';

import { cn } from '@/utils/cn';
import { Box, Flex, Section } from '@radix-ui/themes';

import { Image } from '../ui/images';
import { Text } from '../ui/typo';

import Header from './Header';
import SideBar from './SideBar';
import SubHeader from './SubHeader';

interface Props {
  children: React.ReactNode;
  className?: string;
  hideHeader?: boolean;
  hideSideBar?: boolean;
  title?: string;
  subTitle?: string;
}

const PageLayout: React.FC<Props> = ({
  children,
  className,
  hideHeader,
  hideSideBar,
  ...props
}: Props) => {
  return (
    <>
      <Section className="relative m-auto h-screen" p="0">
        <Box className="items-start bg-red-100 h-full overflow-hidden">
          {!hideHeader && <Header {...props} />}
          <Flex className="h-full bg-white">
            {!hideSideBar && <SideBar />}
            <Box className={cn(' flex-1', hideHeader && 'pt-0', className)}>
              <Box className="overflow-auto h-full">{children}</Box>
            </Box>
          </Flex>
        </Box>
      </Section>
    </>
  );
};

export default PageLayout;
