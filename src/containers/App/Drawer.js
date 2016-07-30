import React, { PropTypes } from 'react';
import MuiDrawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Drawer = ({
  open,
  handleChange,
  handleIssueLink,
  handleSolutionLink,
}) => (
  <MuiDrawer
    docked={false}
    width={200}
    open={open}
    onRequestChange={handleChange}
  >
    <MenuItem onTouchTap={handleIssueLink}>
      Issues
    </MenuItem>
    <MenuItem onTouchTap={handleSolutionLink}>
      Solutions
    </MenuItem>
  </MuiDrawer>
);

Drawer.propTypes = {
  open: PropTypes.bool,
  handleChange: PropTypes.func,
  handleIssueLink: PropTypes.func,
  handleSolutionLink: PropTypes.func,
};

export default Drawer;

