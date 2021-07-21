import React, { FunctionComponent, ReactNode } from 'react';
import TextField from '@material-ui/core/TextField';

type Variant = 'filled' | 'outlined' | 'standard';
type Size = 'medium' | 'small';
type Color = 'primary' | 'secondary';

type Props = {
  fullWidth: boolean;
  size: Size;
  defaultValue?: string;
  variant: Variant;
  select?: boolean;
  color: Color;
  children?: ReactNode;
  disabled?: boolean;
};

const TextInput: FunctionComponent<Props> = ({ ...props }) => {
  return <TextField {...props} />;
};

export default TextInput;
