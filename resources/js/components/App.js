import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'

//--------- Component Import -================
import Header from './Header';
import Loading from './Loading'

//--------- PAGES Import -================
import Dashboard from '../pages/Dashboard'
import Logout from '../pages/Logout'
import Login from '../pages/Login'
import Population from '../pages/Population'
import { ToastContainer } from 'react-toastify';
import Sidebar from './Sidebar';
import ShowPopulation from '../pages/ShowPopulation';
// import Sidebar from './Sidebar'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            sideActive: false,
            classApp: "app-content"
        }
        this.setStatusSidebar = this.setStatusSidebar.bind(this)
        this.checkLogin = this.checkLogin.bind(this)
        this.initData = this.initData.bind(this)
    }

    componentDidMount() {
        this.checkLogin()
        this.initData()
    }

    initData(){
        axios.get('/api/holders').then((response)=>{
            console.log("HOLDER")
            this.props.dispatch({
                type: "INIT_HOLDER",
                payload: response.data,
            })
        }).catch(e=>{
            console.error("ERROR ON INIT HOLDER "+e);
        })
        axios.get('/api/welfares').then((response)=>{
            console.log("Welfare")
            this.props.dispatch({
                type: "INIT_WELFARE",
                payload: response.data,
            })
        }).catch(e=>{
            console.error("ERROR ON INIT WELFARE "+e);
        })
        axios.get('/api/kbprograms').then((response)=>{
            console.log("KB")
            this.props.dispatch({
                type: "INIT_KB",
                payload: response.data,
            })
        }).catch(e=>{
            console.error("ERROR ON INIT KB "+e);
        })
        axios.get('/api/reasons').then((response)=>{
            console.log("REASON")
            this.props.dispatch({
                type: "INIT_REASON",
                payload: response.data,
            })
        }).catch(e=>{
            console.error("ERROR ON INIT REASON "+e);
        })
        axios.get('/api/domiciles').then((response)=>{
            console.log("DOMICILE")
            this.props.dispatch({
                type: "INIT_DOMICILE",
                payload: response.data,
            })
        }).catch(e=>{
            console.error("ERROR ON INIT DOMICILE "+e);
        })
    }

    checkLogin(){
        axios.get('/api/user').then((response) => {
            this.props.dispatch({
                type: "LOGIN_USER",
                payload: response.data,
            })
            setTimeout(() => {
                this.setState({
                    loading: false,
                })
                console.log("Loading Finish")
                console.log(this.state)
            }, 2000);
        }).catch((err) => {
            if (err.response) {
                // client received an error response (5xx, 4xx)
                console.log(err.message)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    })
                    console.log("Loading Finish")
                    console.log(this.state)
                }, 2000);

            } else if (err.request) {
                // client never received a response, or request never left
                console.log("Response not sended")
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    })
                    console.log("Loading Finish")
                    console.log(this.state)
                }, 2000);
            } else {
                console.log("Response not happen")
                // anything else
            }

        });
    }

    setStatusSidebar(value){
        value?
        this.setState({sideActive:value,classApp:"app-content content-active"}):
        this.setState({sideActive:value,classApp:"app-content"})
    }

    render() {
        return (
            <div>
                {this.state.loading &&
                    <Loading load />
                }
                <Router>
                    {!this.props.haslogin ? <Redirect to="/app/login" /> : <Redirect to="/app" />}
                    <div className={this.props.haslogin?this.state.classApp:""}>
                        {this.props.haslogin && <Header />}
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route exact path="/app">
                                <Dashboard />
                            </Route>
                            <Route path="/app/add/population">
                                <Population />
                            </Route>
                            <Route path="/app/show/population">
                                <ShowPopulation />
                            </Route>
                            <Route path="/app/logout">
                                <Logout />
                            </Route>
                            <Route path="/app/login">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                {this.props.haslogin &&
                        <Sidebar callback={this.setStatusSidebar}></Sidebar>}

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                >{/* Same as */}</ToastContainer>
            </div>

        );
    }
}
const mapStateToProps = state => {
    console.log("update")
    return { haslogin: state.haslogin }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
