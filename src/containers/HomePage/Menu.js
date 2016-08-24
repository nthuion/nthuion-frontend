import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import MenuItem from './MenuItem';
import style from './style.scss';
import iconMenu from './images/icon-menu.png';

class Menu extends Component {
  static propTypes = {
    first: PropTypes.number,
    menu: PropTypes.array,
    onItemClick: PropTypes.func,
  };
  static defaultProps = {
    menu: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  openMenu = () => {
    this.setState({ open: true });
  };
  closeMenu = () => {
    this.setState({ open: false });
  };
  handleItemClick = (section) => {
    this.closeMenu();
    this.props.onItemClick(section);
  };
  renderMenu = () => {
    if (!this.state.open) {
      return null;
    }
    const { menu } = this.props;
    const menuList = menu.map((m) => (
      <MenuItem
        name={m.name}
        section={m.section}
        onClick={this.handleItemClick}
      />
    ));
    return (
      <div className={style.menuContainer}>
        <div className={style.menuTitle}>選單</div>
        <div className={style.menuLine} />
        {menuList}
      </div>
    );
  }
  renderMenuIcon = () => {
    const { first } = this.props;
    const className = cx(style.menuIcon, {
      [style.first]: first,
    });
    return (
      <img
        className={className}
        src={iconMenu}
        alt="menu"
        onClick={this.openMenu}
      />
    );
  };
  render() {
    return (
      <div>
        {this.renderMenu()}
        {this.renderMenuIcon()}
      </div>
    );
  }
}

export default Menu;

