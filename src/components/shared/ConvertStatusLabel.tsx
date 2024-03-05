import React from 'react';

import { cn } from '@/utils/cn';
import { Box, Flex } from '@radix-ui/themes';

import { Image } from '../ui/images';
import { Text } from '../ui/typo';
type Props = {
  status?:
    | 'approved'
    | 'pending'
    | 'rejected'
    | 'active'
    | 'inactive'
    | 'blocked'
    | 'disabled'
    | 'paid'
    | 'unpaid';
  onPress?: () => void;
  disableArrow?: boolean;
  menuIcon?: boolean;
};

const ConvertStatusLabel: React.FC<Props> = ({
  status = 'pending',
  onPress = () => {},
  disableArrow = false,
  menuIcon = false,
}: Props) => {
  return (
    <Flex justify="between" align="center">
      <Box
        className={cn(
          status == 'active'
            ? 'bg-blue-500'
            : status == 'rejected' || status == 'unpaid'
            ? 'bg-red-300'
            : status == 'blocked' || status == 'disabled'
            ? 'bg-red-400'
            : status == 'pending'
            ? 'bg-yellow-100'
            : status == 'inactive'
            ? 'bg-gray-400'
            : 'bg-green-300',
          'py-[1px] px-2 rounded-full'
        )}
      >
        <Text
          className={cn(
            status == 'active'
              ? 'text-blue-400'
              : status == 'pending'
              ? 'text-yellow-200'
              : status == 'blocked' || status == 'disabled'
              ? 'text-red-300'
              : status == 'inactive'
              ? 'text-gray-200'
              : 'text-white',
            'text-[12px] font-medium capitalize'
          )}
        >
          {status == 'pending' ? 'Review' : status == 'rejected' ? 'Declined' : status}
        </Text>
      </Box>
      {!disableArrow &&
        (menuIcon ? (
          <div onClick={onPress}>
            <Image
              src="/upload/icons/border_menu_icon.svg"
              width={36}
              height={36}
              alt="Right Arrow Image"
            />
          </div>
        ) : (
          <div onClick={onPress}>
            <Image
              src="/upload/icons/border_arrow_right.svg"
              width={36}
              height={36}
              alt="Right Arrow Image"
            />
          </div>
        ))}
    </Flex>
  );
};

export default ConvertStatusLabel;
