import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import ItemListItem from './ItemListItem';

function renderList(type, items) {
  return items.map((item, i) => (
    <div key={item.id}>
      {i === 0 ? null : <Divider />}
      <ItemListItem type={type} item={item} />
    </div>
  ));
}

const ItemList = ({ type, items }) => (
  <Card>{renderList(type, items)}</Card>
);

ItemList.propTypes = {
  type: PropTypes.oneOf(['issue', 'solution']).isRequired,
  items: PropTypes.array.isRequired,
};

export default ItemList;

