import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Container from '../common/Container';
import Section from '../common/Section';
import { blue300, blue500, red500 } from 'material-ui/styles/colors';
import { fbLogin } from './actions';

class Auth extends Component {
  static propTypes = {
    error: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };
  handleFbLogin = () => {
    this.props.dispatch(fbLogin());
  };
  renderError = () => {
    if (this.props.error === 'FB_LOGIN_FAIL') {
      return <p style={{ color: red500 }}>FB登入失敗</p>;
    }
    if (this.props.error === 'API_LOGIN_FAIL') {
      return <p style={{ color: red500 }}>登入失敗</p>;
    }
    return null;
  };
  render() {
    return (
      <Section>
        <Container>
          <Card>
            <CardTitle title="登入" />
            <CardText>
              {this.renderError()}
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

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps)(Auth);

