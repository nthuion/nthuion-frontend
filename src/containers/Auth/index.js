import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Container from '../common/Container';
import Section from '../common/Section';

import { blue300, blue500 } from 'material-ui/styles/colors';
import { fbLogin } from './actions';

class Auth extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  handleFbLogin = () => {
    this.props.dispatch(fbLogin());
  };
  render() {
    return (
      <Section>
        <Container>
          <Card>
            <CardTitle title="Login" />
            <CardText>
              <FlatButton
                backgroundColor={blue300}
                hoverColor={blue500}
                label="Login with Facebook"
                style={{ color: 'white' }}
                onClick={this.handleFbLogin}
              />
            </CardText>
          </Card>
        </Container>
      </Section>
    );
  }
}

export default connect()(Auth);

