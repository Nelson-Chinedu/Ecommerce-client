import { FunctionComponent, ReactNode } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'default';
  className?: string;
  children: ReactNode;
  endIcon?: ReactNode;
  disableElevation: boolean;
};

const Index: FunctionComponent<Props> = ({
  variant,
  color,
  className,
  children,
  endIcon,
  disableElevation,
}) => {
  return (
    <Button
      color={color}
      className={className}
      variant={variant}
      endIcon={endIcon}
      disableElevation={disableElevation}
    >
      {children}
    </Button>
  );
};

export default Index;
