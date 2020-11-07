import React from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import setCookie from '../Cookies/SetCookie';
import { upPage } from '../UpPage/Uppage';
import { REMOVE_USER } from '../ContextApi/Types';
import { useHistory } from 'react-router';

const Avatar = ({ message }) => {
    const [store, dispatch] = useStateValue();
    const history = useHistory();

    const logOutHandle = () => {
        //upPage();
        setCookie('email', null, -1);
        setCookie("user", null, -1);
        setCookie("token", null, -1);
        setCookie("user_name", null, -1);
        setCookie("cheked", null, -1);
        dispatch({
            type: REMOVE_USER,
            user: {
                user: []
            },
        });
    }

    const adminHandler = () => {
        upPage();
        history.push("/adminpage");
    }

    return <div>
        <i onClick={logOutHandle} className="ml-sm-4 fa fa-users"></i> <small onClick={adminHandler}>{message}</small>
    </div>
}

export default Avatar;