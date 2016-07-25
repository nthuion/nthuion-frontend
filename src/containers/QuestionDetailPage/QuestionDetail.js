import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import style from './style.scss';

class QuestionDetail extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  };
  renderTags = () => {
    const { tags } = this.props;
    return tags.map((tag) => (
      <div className={style.tag}>
        <Chip>{tag}</Chip>
      </div>
    ));
  };
  render() {
    const { title, content } = this.props;
    return (
      <Card>
        <CardTitle title={title}>
          <div className={style.tagList}>
            {this.renderTags()}
          </div>
        </CardTitle>
        <CardText>
          {content}
        </CardText>
      </Card>
    );
  }
}

export default QuestionDetail;

