import React from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import setCookie from '../Cookies/SetCookie';
import { upPage } from '../UpPage/Uppage';
import { REMOVE_USER } from '../ContextApi/Types';
import { useHistory } from 'react-router';
import getCookie from '../Cookies/GetCookie';

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
        setCookie("expiration", null, -1);
        setCookie("XSRF-TOKEN", null, -1);
        setCookie("role", null, -1);
        dispatch({
            type: REMOVE_USER,
            user: {
                user: []
            },
        });
    }

    const adminHandler = () => {
        upPage();
        const role = getCookie("role");
        console.log(role)
        if (role == "Admin") {
            history.push("/adminpage");
        } else {
            // To Do management
        }
    }

    return <div>
        <i onClick={logOutHandle} className="ml-sm-4 fa fa-users"></i> <small onClick={adminHandler}>{message}</small>
    </div>
}

export default Avatar;