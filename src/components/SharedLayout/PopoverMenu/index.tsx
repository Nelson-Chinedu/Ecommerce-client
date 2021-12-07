import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';

export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: '5px',
    padding: '5px 15px',
    width: '150px',
    '& .edit': {
      borderTop: '1px solid #FAFAFA',
      paddingTop: '10px',
      fontSize: '12.64px',
      lineHeight: '14px',
      color: '#737373',
      cursor: 'pointer',
    },
    '& .delete': {
      paddingTop: '10px',
      fontSize: '12.64px',
      lineHeight: '14px',
      cursor: 'pointer',
      '& .MuiListItemText-primary': {
        color: 'red',
      },
    },
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));
