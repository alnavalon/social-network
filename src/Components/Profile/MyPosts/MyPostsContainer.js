import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText
    };
};

const MyPostsContainer = connect(mapStateToProps, {addPost: addPostCreator})(MyPosts);
export default MyPostsContainer;