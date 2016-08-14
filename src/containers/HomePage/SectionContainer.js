import React, { Component, PropTypes } from 'react';
import throttle from 'lodash/throttle';
import style from './style.scss';
import iconTop from './images/icon-top.png';

class SectionContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      section: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('mousewheel', this.handleWheel);
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleWheel);
    window.removeEventListener('keydown', this.handleKeydown);
    clearTimeout(this.timer);
  }
  scroll = (section) => {
    this.setState({
      section,
      scrolling: true,
    });
    this.timer = setTimeout(() => {
      this.setState({ scrolling: false });
    }, 1000);
  };
  scrollToNextSection = () => {
    const count = React.Children.count(this.props.children);
    if (this.state.section === count - 1) {
      return;
    }
    this.scroll(this.state.section + 1);
  };
  scrollToPreviousSection = () => {
    if (this.state.section === 0) {
      return;
    }
    this.scroll(this.state.section - 1);
  };
  scrollToTop = () => {
    this.scroll(0);
  };
  handleKeydown = (e) => {
    if (e.keyCode === 38) {
      this.scrollToPreviousSection();
    } else if (e.keyCode === 40) {
      this.scrollToNextSection();
    }
  };
  handleWheel = throttle((e) => {
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if (!this.state.scrolling) {
      if (delta === -1) {
        this.scrollToNextSection();
      } else {
        this.scrollToPreviousSection();
      }
    }
  }, 100);
  renderGotoTopIcon = () => {
    if (this.state.section === 0) {
      return null;
    }
    return (
      <img
        className={style.gotoTopIcon}
        src={iconTop}
        alt="go to top"
        onClick={this.scrollToTop}
      />
    );
  };
  render() {
    const { section } = this.state;
    const children = React.Children.map(this.props.children, (child, i) => (
      React.cloneElement(child, {
        delta: i - section,
      })
    ));
    return (
      <div className={style.sectionContainer}>
        {children}
        {this.renderGotoTopIcon()}
      </div>
    );
  }
}

export default SectionContainer;

