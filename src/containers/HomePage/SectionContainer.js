import React, { Component, PropTypes } from 'react';
import throttle from 'lodash/throttle';
import style from './style.scss';

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
  }
  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleWheel);
    clearTimeout(this.timer);
  }
  scroll = (direction) => {
    this.setState({
      section: this.state.section + direction,
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
    this.scroll(1);
  };
  scrollToPreviousSection = () => {
    if (this.state.section === 0) {
      return;
    }
    this.section--;
    this.scroll(-1);
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
      </div>
    );
  }
}

export default SectionContainer;

