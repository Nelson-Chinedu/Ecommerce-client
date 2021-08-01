import React, { FunctionComponent } from "react";

import { useStyles } from 'src/components/SharedLayout/Divider/styled.divider';


const Divider: FunctionComponent<{}> = ({ children }) => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    <div className={classes.border} />
    <span className={classes.content}>{children}</span>
    <div className={classes.border} />
  </div>
 );
};
export default Divider;