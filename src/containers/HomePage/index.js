import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import MainSection from './MainSection';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import SectionContainer from './SectionContainer';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      large: window.innerWidth >= 768,
    };
    this.children = [
      <MainSection />,
      <Section2 />,
      <Section3 />,
      <Section4 />,
      <Section5 />,
      <Section6 />,
      <Footer />,
    ];
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    if (window.innerWidth < 768) {
      this.setState({ large: false });
    } else {
      this.setState({ large: true });
    }
  };
  render() {
    const children = this.state.large ? this.children : [
      this.children[0],
      ...this.children.slice(2),
    ];
    return (
      <DocumentTitle title="清離子黑客松">
        <SectionContainer>
          {children}
        </SectionContainer>
      </DocumentTitle>
    );
  }
}

export default HomePage;

