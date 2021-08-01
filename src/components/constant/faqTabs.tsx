import { ReactNode } from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';

export type Props = {
  iconName: ReactNode;
  tabName: string;
}

export const faqTabs: Array<Props> = [
  {
    iconName: <EmojiObjectsOutlinedIcon />,
    tabName: 'Getting Started',
  },
  {
    iconName: <StorefrontOutlinedIcon />,
    tabName: 'Shopping Info',
  },
  {
    iconName: <AccountBalanceWalletOutlinedIcon />,
    tabName: 'Payment',
  },
  {
    iconName: <CachedOutlinedIcon />,
    tabName: 'Orders & Returns',
  },
  {
    iconName: <ContactSupportOutlinedIcon />,
    tabName: 'User Guide',
  },
];
