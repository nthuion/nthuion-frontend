import React, { PropTypes } from 'react';
import ItemInfo from '../ItemInfo';

const ItemListItem = ({ type, item }) => (
  <div>
    <ItemInfo type={type} item={item} isLink />
  </div>
);

ItemListItem.propTypes = {
  type: PropTypes.oneOf(['issue', 'question']).isRequired,
  item: PropTypes.object.isRequired,
};

export default ItemListItem;

