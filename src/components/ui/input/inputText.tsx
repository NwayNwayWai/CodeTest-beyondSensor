'use client';
import React from 'react';
import styled from 'styled-components';

import { cn } from '@/utils/cn';

import { Icons } from '../images';
import { Text } from '../typo';

type Props = {
  type?: 'text' | 'email' | 'password' | 'number' | 'submit' | 'hidden';
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  pattern?: string;
  inputMode?: 'numeric' | 'text';
  passShow?: boolean;
  isPassword?: boolean;
  setPassShow?: (value: boolean) => void;
  onChange?: (value: string) => void;
};

const InputText = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      label,
      className,
      placeholder,
      defaultValue,
      disabled = false,
      maxLength = 300,
      pattern,
      inputMode,
      isPassword = false,
      passShow = false,
      setPassShow,
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };
    return (
      <InputStyled>
        <input
          type={type}
          disabled={disabled}
          defaultValue={defaultValue || ''}
          {...props}
          className={cn(
            disabled ? 'bg-gray-100 text-gray-400' : 'bg-white text-primary',
            'px-4 py-2 h-[50px] border border-gray-400 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-blue-600 block w-full rounded-lg sm:text-sm focus:ring-1 placeholder:text-gray-200',
            className
          )}
          placeholder={placeholder}
          onChange={handleChange}
          maxLength={maxLength}
          pattern={pattern}
          inputMode={inputMode}
        />
        {isPassword && (
          <div
            className="absolute top-[15px] right-[20px]"
            onClick={() => setPassShow && setPassShow(!passShow)}
          >
            {passShow ? (
              <Icons.eye className="w-[25px] h-[25px] text-gray-400" />
            ) : (
              <Icons.eyeOff className="w-[25px] h-[25px] text-gray-400" />
            )}
          </div>
        )}
      </InputStyled>
    );
  }
);
InputText.displayName = 'InputText';

InputText.defaultProps = {
  type: 'text',
};

export { InputText };

const InputStyled = styled.div`
  position: relative;
`;
