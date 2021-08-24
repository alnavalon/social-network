import React, {useDebugValue, useEffect, useState} from 'react';

const ProfileStatus = (props) => {

    //returns an array,
    // where there are 2 elements, 1st - value,
    // 2nd - function that changes the value
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);

    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        (status !== props.status) && props.updateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };
    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>{status || 'Set your status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} type="text"
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}/>

            </div>
            }
        </div>
    );
};

export default ProfileStatus;


