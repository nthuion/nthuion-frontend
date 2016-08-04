import React, { PropTypes } from 'react';
import MuiDrawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

function getMenuItemStyle(location, path) {
  if (location.pathname === path) {
    return {
      cursor: 'pointer',
      fontWeight: 700,
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
    };
  }
  return {
    cursor: 'pointer',
  };
}

const Drawer = ({
  open,
  location,
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
    <MenuItem
      style={getMenuItemStyle(location, '/i')}
      onTouchTap={handleIssueLink}
    >
      所有提問
    </MenuItem>
    <MenuItem
      style={getMenuItemStyle(location, '/s')}
      onTouchTap={handleSolutionLink}
    >
      所有提案
    </MenuItem>
  </MuiDrawer>
);

Drawer.propTypes = {
  open: PropTypes.bool,
  location: PropTypes.object,
  handleChange: PropTypes.func,
  handleIssueLink: PropTypes.func,
  handleSolutionLink: PropTypes.func,
};

export default Drawer;

