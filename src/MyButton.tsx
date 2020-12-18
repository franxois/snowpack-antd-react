import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps } from 'antd/lib/button';

export function MyButton(props: ButtonProps) {
  return <AntdButton {...props} />;
}
