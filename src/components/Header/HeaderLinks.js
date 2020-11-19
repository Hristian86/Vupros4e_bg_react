import React, { useState } from 'react';
import { upPage } from '../UpPage/Uppage';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import getCookie from '../Cookies/GetCookie';
import setCookie from '../Cookies/SetCookie';
import { useEffect } from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import { REMOVE_USER, CHECK_USER } from '../ContextApi/Types';
import './Header.css';

const HeaderLinks = () => {

    const [state, setState] = useState({});
    const [state1, setState1] = useState({});
    const [store, dispatch] = useStateValue();
    let user = store.user;

    const logOutHandle = () => {
        upPage();
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

    const addUser = (user) => {
        dispatch({
            type: CHECK_USER,
            user: {
                user: user
            },
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setState({
                user: user[0] != undefined ? user[0].user : null
            });

        }, 200);

        // Initialize the check for user on landing the page
        retriveData();

    }, [user])

    const retriveData = () => {

        const user = getCookie('user');

        if (user?.length > 1) {
            setTimeout(() => {
                setState({
                    user: {
                        user: user
                    }
                });
            }, 250)
        } else {

        }
    }


    return <div className="header2 pl-md-5 pr-md-5 pb-1">

        <div className="nav-link">

            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Начало
                    </Link>

        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Правила
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/forumpage">
                Форум
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Статистика
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Материали по темата
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                За нас
            </Link>
        </div>

        <div className="nav-link">
            <Link
            to={state?.user ? "#" : "/authO/login"}
            className="header__link text-white shadow-box"
            >
            {state.user ?
                    <div className="Sign__in">
                        <span
                        className="header__optionsLineTwo">
                            <Avatar message={"Здравей " + state?.user?.user} />
                        </span>
                </div>
                :
                <div className="">
                    <span
                        className="header__optionsLineOne">
                            <Avatar message={"Регистриране"}/>
                    </span>
                </div>
            }
        </Link>
        </div>
    </div>
}

export default HeaderLinks;