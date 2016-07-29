import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Section from '../common/Section';
import Container from '../common/Container';
import ItemDetail from './ItemDetail';
import CommentForm from '../CommentForm';
import CommentList from './CommentList';
import { fetchItem, fetchComments } from './actions';

class ItemDetailPage extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    item: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { type, id } = this.props;
    this.props.dispatch(fetchItem(type, id));
    this.props.dispatch(fetchComments(type, id));
  }
  render() {
    const { type, item, comments, id } = this.props;
    if (!item) {
      return null;
    }
    return (
      <div>
        <Container>
          <Section>
            <ItemDetail type={type} item={item} />
          </Section>
          <Section>
            <Subheader>所有回應</Subheader>
            <CommentList type={type} comments={comments} />
          </Section>
          <Section>
            <CommentForm type={type} qid={id} />
          </Section>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.itemDetail;

export default connect(mapStateToProps)(ItemDetailPage);

