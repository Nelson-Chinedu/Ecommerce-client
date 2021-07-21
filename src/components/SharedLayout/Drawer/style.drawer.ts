import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {},
  closeWrapper: {
    marginTop: '2%',
  },
});

export const StyledDrawer = styled(Drawer)`
  width: 25%;
  & .MuiDrawer-paper {
    width: 20%;
  }
`;
