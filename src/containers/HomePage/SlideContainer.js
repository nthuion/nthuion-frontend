import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import FaCaretLeft from 'react-icons/lib/fa/caret-left';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import style from './style.scss';

class SlideContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
    };
  }
  slide = (direction) => {
    this.setState({
      slide: this.state.slide + direction,
    });
  };
  nextSlide = () => {
    const count = React.Children.count(this.props.children);
    if (this.state.slide === count - 1) {
      return;
    }
    this.slide(1);
  };
  previousSlide = () => {
    if (this.state.slide === 0) {
      return;
    }
    this.slide(-1);
  };
  renderPrevious = () => {
    const disable = this.state.slide === 0;
    return (
      <div
        className={cx(style.previousSlide, {
          [style.disable]: disable,
        })}
        onClick={this.previousSlide}
      >
        <FaCaretLeft />
      </div>
    );
  };
  renderNext = () => {
    const count = React.Children.count(this.props.children);
    return (
      <div
        className={cx(style.nextSlide, {
          [style.disable]: this.state.slide === count - 1,
        })}
        onClick={this.nextSlide}
      >
        <FaCaretRight />
      </div>
    );
  };
  render() {
    const { slide } = this.state;
    const children = React.Children.map(this.props.children, (child, i) => (
      React.cloneElement(child, {
        delta: i - slide,
      })
    ));
    return (
      <div className={style.slideContainer}>
        {this.renderPrevious()}
        <div className={style.slideSlot}>
          {children}
        </div>
        {this.renderNext()}
      </div>
    );
  }
}

export default SlideContainer;

