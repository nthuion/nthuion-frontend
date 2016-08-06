import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Subheader from 'material-ui/Subheader';
import Section from '../common/Section';
import Container from '../common/Container';
import ItemDetail from './ItemDetail';
import CommentForm from '../CommentForm';
import CommentList from './CommentList';
import { fetchItem } from './actions';

class ItemDetailPage extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    itemsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { type, id } = this.props;
    this.props.dispatch(fetchItem(type, id));
  }
  render() {
    const { type, id, itemsById } = this.props;
    const item = itemsById[type][id];
    if (!item) {
      return null;
    }
    const title = type === 'issue' ? `問題 #${id}` : `提案 #${id}`;
    return (
      <DocumentTitle title={title}>
        <div>
          <Container>
            <Section>
              <ItemDetail type={type} item={item} />
            </Section>
            <Section>
              <Subheader>所有回應</Subheader>
              <CommentList type={type} comments={item.comments} />
            </Section>
            <Section>
              <CommentForm type={type} qid={id} />
            </Section>
          </Container>
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsById: state.itemCollection.itemsById,
});

export default connect(mapStateToProps)(ItemDetailPage);

