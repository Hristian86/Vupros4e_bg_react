import React from 'react';
import { upPage } from '../UpPage/Uppage';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import getCookie from '../Cookies/GetCookie';

const HeaderLinks = () => {
    const user = getCookie("user");
    return <div className="header2 pl-md-5 pr-md-5">

        <div className="nav-link">

            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Na4alo
                    </Link>

        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Pravila
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Forum
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Statistika
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Materiali po temata
                    </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to="/">
                Za nas
            </Link>
        </div>

        <div className="nav-link">
            <Link
                className="header__link text-white shadow-box"
                onClick={upPage}
                to={user ? "#" : "/authO/login"}>
                <Avatar />
            </Link>
        </div>
    </div>
}

export default HeaderLinks;