import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
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
    const { type } = this.props;
    this.props.dispatch(fetchItemList(type));
  }
  render() {
    const { type, itemCollection } = this.props;
    const { allItems, itemsById } = itemCollection;
    const documentTitle = type === 'issue' ? '問題列表' : '提案列表';
    const title = type === 'issue' ? '所有問題' : '所有提案';
    const items = allItems[type].map((item) => (
      itemsById[type][item]
    ));
    return (
      <DocumentTitle title={documentTitle}>
        <div>
          <Section>
            <Container>
              <Subheader>{title}</Subheader>
              <ItemList type={type} items={items} />
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

