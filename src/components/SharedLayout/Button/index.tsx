import { FunctionComponent, ReactNode } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'default';
  className?: string;
  children: ReactNode;
  endIcon?: ReactNode;
  disableElevation: boolean;
  fullWidth: boolean;
  href?: string;
  onClick?: () => void;
};

const Index: FunctionComponent<Props> = ({
  variant,
  color,
  className,
  children,
  endIcon,
  disableElevation,
  fullWidth,
  href,
  ...rest
}) => {
  return (
    <Button
      color={color}
      className={className}
      variant={variant}
      endIcon={endIcon}
      disableElevation={disableElevation}
      fullWidth={fullWidth}
      href={href}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Index;
