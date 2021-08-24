
import {connect} from 'react-redux';
import Sidebar from './Sidebar';

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}
const SideBarContainer = connect(mapStateToProps)(Sidebar);
export default SideBarContainer;