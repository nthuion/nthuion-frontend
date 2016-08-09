import React, { Component, PropTypes } from 'react';
import throttle from 'lodash/throttle';
import { animateScroll } from 'react-scroll';
import style from './style.scss';

class SectionContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  constructor(props) {
    super(props);
    this.scrollY = 0;
    this.scrolling = false;
    this.section = 0;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearTimeout(this.timer);
  }
  scrollTo = (x, y) => {
    this.scrolling = true;
    animateScroll.scrollTo(y, { duration: 400 });
    this.timer = setTimeout(() => {
      this.scrolling = false;
    }, 500);
  };
  scrollToNextSection = () => {
    const count = React.Children.count(this.props.children);
    if (this.section === count - 1) {
      return;
    }
    this.section++;
    this.scrollTo(0, window.innerHeight * this.section);
  };
  scrollToPreviousSection = () => {
    if (this.section === 0) {
      return;
    }
    this.section--;
    this.scrollTo(0, window.innerHeight * this.section);
  };
  handleScroll = throttle((e) => {
    const { scrollY } = window;
    if (!this.scrolling) {
      if (scrollY > this.scrollY) {
        this.scrollToNextSection();
      } else if (scrollY < this.scrollY) {
        this.scrollToPreviousSection();
      }
    } else {
      e.preventDefault();
    }
    this.scrollY = scrollY;
  }, 100);
  render() {
    const { children } = this.props;
    return (
      <div className={style.sectionContainer}>
        {children}
      </div>
    );
  }
}

export default SectionContainer;

