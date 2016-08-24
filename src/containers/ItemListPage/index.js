import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import throttle from 'lodash/throttle';
import ItemList from './ItemList';
import Section from '../common/Section';
import Container from '../common/Container';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MdCreate from 'react-icons/lib/md/create';
import { fetchItemList } from './actions';
import style from '../common/styles/base.scss';

class ItemListPage extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    itemCollection: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.fetchItemList({
      ordering: 'latest',
      limit: 10,
      offset: 0,
    });
    this.fetchItemList({
      ordering: 'popularity',
      limit: 5,
      offset: 0,
    });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  fetchItemList = (params) => {
    const { type } = this.props;
    const { fetching } = this.props.itemCollection;
    if (!fetching) {
      this.props.dispatch(fetchItemList(type, params));
    }
  };
  fetchMoreItems = () => {
    const { type } = this.props;
    const { allItems } = this.props.itemCollection;
    this.fetchItemList({
      ordering: 'latest',
      limit: 10,
      offset: allItems[type].latest.length,
    });
  };
  handleScroll = throttle(() => {
    const node = findDOMNode(this);
    const clientHeight = node.clientHeight;
    const { scrollY, innerHeight } = window;
    if (scrollY + innerHeight > clientHeight + 50) {
      this.fetchMoreItems();
    }
  }, 100);
  render() {
    const { type, itemCollection } = this.props;
    const { allItems, itemsById } = itemCollection;
    const documentTitle = type === 'issue' ? '問題列表' : '提案列表';
    const latestTitle = type === 'issue' ? '所有問題' : '所有提案';
    const popularTitle = type === 'issue' ? '熱門問題' : '熱門提案';
    const latestItemList = allItems[type].latest.map((item) => (
      itemsById[type][item]
    ));
    const popularItemList = allItems[type].popularity.map((item) => (
      itemsById[type][item]
    ));
    return (
      <DocumentTitle title={documentTitle}>
        <div>
          <Section>
            <Container>
              <Subheader>{popularTitle}</Subheader>
              <ItemList type={type} items={popularItemList} />
            </Container>
          </Section>
          <Section>
            <Container>
              <Subheader>{latestTitle}</Subheader>
              <ItemList type={type} items={latestItemList} />
            </Container>
          </Section>
          <Link to={`/${type[0]}/create`}>
            <FloatingActionButton className={style.fixedActionButton}>
              <MdCreate />
            </FloatingActionButton>
          </Link>
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (state) => ({
  itemCollection: state.itemCollection,
});

export default connect(mapStateToProps)(ItemListPage);

