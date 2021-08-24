import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';



class App extends Component {
    componentDidMount() {
        !this.props.isAuth && this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>;
        else
            return (
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/profile/:userId?'}
                               render={() => <ProfileContainer/>}
                        />
                        <Route path={'/dialogs'}
                               render={() => <DialogsContainer/>}
                        />
                        <Route path={'/login'}
                               render={() => <LoginContainer/>}
                        />
                        <Route path={'/users'}
                               render={() => <UsersContainer/>}
                        />
                        <Route path={'/news'}
                               component={News}/>
                        <Route path={'/music'}
                               component={Music}/>
                        <Route path={'/settings'}
                               component={Settings}/>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    };
};

export default connect(mapStateToProps, {initializeApp})(App);


