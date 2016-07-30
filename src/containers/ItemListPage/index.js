import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { type } = this.props;
    this.props.dispatch(fetchItemList(type));
  }
  render() {
    const { type, items } = this.props;
    const title = type === 'issue' ? '所有問題' : '所有提案';
    return (
      <div>
        <Section>
          <Container>
            <Subheader>{title}</Subheader>
            <ItemList type={type} items={items[type]} />
          </Container>
        </Section>
        <Link to={`/${type[0]}/create`}>
          <FloatingActionButton className={style.fixedActionButton}>
            <MdCreate />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemList.items,
});

export default connect(mapStateToProps)(ItemListPage);

