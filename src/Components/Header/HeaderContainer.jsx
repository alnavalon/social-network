import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuth, logout} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    ...state.auth
});

export default connect(mapStateToProps, {logout})(HeaderContainer);

