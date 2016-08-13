import React, { Component, PropTypes } from 'react';
import Parallax from 'parallax'; // eslint-disable-line import/no-unresolved

class ParallaxScene extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  componentDidMount() {
    this.parallax = new Parallax(this.refs.parallax);
    this.parallax.enable();
  }
  componentWillUnmount() {
    this.parallax.disable();
  }
  render() {
    return (
      <div className="parallax-scene" ref="parallax">
        {this.props.children}
      </div>
    );
  }
}

export default ParallaxScene;

