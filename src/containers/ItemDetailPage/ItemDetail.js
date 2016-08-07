import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import ItemInfo from '../ItemInfo';
import ReadOnlyText from '../Editor/ReadOnlyText';

const ItemDetail = ({ type, item }) => (
  <Card>
    <ItemInfo type={type} item={item} />
    <CardText>
      <ReadOnlyText content={item.content} />
    </CardText>
  </Card>
);

ItemDetail.propTypes = {
  type: PropTypes.oneOf(['issue', 'solution']).isRequired,
  item: PropTypes.object.isRequired,
};

export default ItemDetail;

