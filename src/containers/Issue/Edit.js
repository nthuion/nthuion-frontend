import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CreateItemPage from '../CreateItemPage';
import { fetchItem } from '../ItemDetailPage/actions';

const defaultItem = {
  id: -1,
  title: '',
  tags: [],
  is_anonymous: false,
};

class EditIssuePage extends Component {
  static propTypes = {
    itemsById: PropTypes.objects,
    params: PropTypes.objects,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const item = this.getItem();
    const { params: { id } } = this.props;
    if (!item) {
      this.props.dispatch(fetchItem('issue', id));
    }
  }
  getItem = () => {
    const { itemsById, params: { id } } = this.props;
    return itemsById.issue[id];
  };
  render() {
    const item = this.getItem() || defaultItem;
    return (
      <CreateItemPage key={item.id} type="issue" item={item} isEdit />
    );
  }
}

const mapStateToProps = (state) => ({
  itemsById: state.itemCollection.itemsById,
});

export default connect(mapStateToProps)(EditIssuePage);

