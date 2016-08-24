import React, { PropTypes, Component } from 'react';
import style from './style.scss';

class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    section: PropTypes.number,
    onClick: PropTypes.func,
  };
  handleClick = () => {
    const { section, onClick } = this.props;
    onClick(section);
  };
  render() {
    const { name } = this.props;
    return (
      <div
        className={style.menuItem}
        onClick={this.handleClick}
      >
        {name}
      </div>
    );
  }
}

export default MenuItem;

