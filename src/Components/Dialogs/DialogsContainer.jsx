import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text));
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);