import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            isEditMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            isEditMode: false
        });
        if (this.state.status !== this.props.status)
            this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.isEditMode &&
                    <div>
                        <span
                            onClick={this.activateEditMode}>{this.state.status || 'Set your status'}</span>
                    </div>
                }
                {
                    this.state.isEditMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text"
                               onChange={this.onStatusChange} value={this.state.status}/>

                    </div>
                }
            </div>
        );
    }


};

export default ProfileStatus;


