import { FunctionComponent, ReactNode } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'default';
  className: string;
  children: ReactNode;
  endIcon?: ReactNode;
};

const Index: FunctionComponent<Props> = ({
  variant,
  color,
  className,
  children,
  endIcon
}) => {
  return (
    <Button color={color} className={className} variant={variant} endIcon={endIcon}>
      {children}
    </Button>
  );
};

export default Index;
