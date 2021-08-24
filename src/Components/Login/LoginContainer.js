import {connect} from 'react-redux';
import {logIn} from '../../redux/auth-reducer';
import Login from './Login';
import React from 'react';
import {Redirect} from 'react-router-dom';

class LoginContainer extends React.Component {

    render() {
        if (this.props.isAuth) {
            return <Redirect to={`/profile`}/>;
        }
        return <Login logIn={this.props.logIn}
                      errorMessage={this.props.errorMessage}/>;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps, {logIn})(LoginContainer);