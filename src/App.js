import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Register from './components/AuthO/Register';
import Logout from './components/AuthO/Logout';
import { useState } from 'react';
import { useStateValue } from './components/ContextApi/StateProvider';
import getCookie from './components/Cookies/GetCookie';
import setCookie from './components/Cookies/SetCookie';
import url from './components/BaseUrl/BaseUrl';
import Login from './components/AuthO/LogIn';
//import PrivateRoute from './components/Auth/PrivateRoute';
import { CHECK_USER, GET_ITEMS } from './components/ContextApi/Types';
import AdminPage from './Pages/AdminPage/AdminPage';
import FetchData from './components/AuthListener/FetchData';
import NotFound from './Pages/NotFoundPage/NotFount';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeaderLogo from './components/Header/HeaderLogo';

const App = () => {

    const [state, setState] = useState({});
    const [state1, setState1] = useState({});
    const [{ fetchData, user }, dispatch] = useStateValue();

    // Chekcing user cookies and create a user object in the context api store if it exists.
    const checkingCookieUser = () => {
        try {
            const user = getCookie('user');
            if (user) {
                addUser(user);
            } else {

            }
        } catch (e) {
            console.log(e);
        }
    }

    // Fetching categories data from back end.
    const fetchDataFromApi = (data) => {
        console.log("fetching...");
        dispatch({
            type: GET_ITEMS,
            fetcheData: {
                items: data.question
            },
        });
    }

    let interval;
    
    useEffect(() => {
        const getData = async () => {
            const result = await dataListener("api/questionapi");
            if (result) {
                const res = JSON.parse(result.geoLocation);
                console.log(res);
                fetchDataFromApi(result);
                //clearInterval(interval);
            }
        }
        getData();
        checkingCookieUser();
    }, []);

    // Adding user object to the context api store and his credentials in the cookies.
    const addUser = (user) => {
        const token = getCookie("token");
        const email = getCookie("email");
        const expiration = getCookie("expiration");

        // Alot of nesting.
        const userNest = {
            user: user,
            token: token,
            email: email,
            expiration: expiration,
        }

        let userToAdd = {
            user: userNest
        }

        dispatch({
            type: CHECK_USER,
            user: userToAdd,
        })
    }

    
    const dataListener = async (apiController) => {
        const result = await FetchData(apiController, null, "GET");
        return result;
    }


    return <div className="App">
        <header className="App-header">
            <Layout>
                <Router>

                    {/* Navigation bar */}
                    <HeaderLogo />
                    <Header />

                    <Switch>

                        <Route exact path="/authO/register">
                            <Register />
                        </Route>

                        <Route exact path="/authO/login">
                            <Login />
                        </Route>

                        <Route exact path="/authO/logout">
                            <Logout />
                        </Route>

                        <Route exact path="/adminpage">
                            <AdminPage />
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>

            </Layout>

        </header>
    </div>
}
export default App;