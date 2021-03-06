import React, { FunctionComponent, ReactNode } from 'react';
import TextField from '@material-ui/core/TextField';

type Variant = 'filled' | 'outlined' | 'standard';
type Size = 'medium' | 'small';
type Color = 'primary' | 'secondary';
type Type = 'text' | 'email' | 'password' | 'tel' | 'date';

type Props = {
  fullWidth: boolean;
  size: Size;
  defaultValue?: string;
  variant: Variant;
  select?: boolean;
  color: Color;
  name?: string;
  onChange?: any;
  onBlur?: any;
  value?: string | number;
  children?: ReactNode;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  rows?: number;
  cols?: number;
  type?: Type;
  multiline?: boolean;
  InputProps?: any;
  autoFocus?: any;
  className?: string;
  helperText?: string;
  error?: boolean;
  endAdornment?: any;
  autoComplete?: string;
};

const TextInput: FunctionComponent<Props> = ({
  fullWidth,
  size,
  variant,
  color,
  label,
  ...rest
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      color={color}
      size={size}
      variant={variant}
      label={label}
      {...rest}
    />
  );
};

export default TextInput;
