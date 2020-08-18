import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'

//--------- Component Import -================
import Header from './Header';
import Loading from './Loading'

//--------- PAGES Import -================
import Dashboard from '../pages/Dashboard'
import Logout from '../pages/Logout'
import Login from '../pages/Login'
import Population from '../pages/Population'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        axios.get('/api/user').then((response) => {
            setTimeout(() => {
                this.setState({
                    loading: false,
                })
                this.props.dispatch({
                    type:"LOGIN_USER",
                    payload: response.data,
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

    render() {
        return (
            <div className="h-100">
                {this.state.loading && <Fade collapse when={this.state.loading}>
                    <Loading load />
                </Fade>}
                <Router>
                    {this.props.haslogin && <Header />}

                    {!this.props.haslogin ? <Redirect to="/app/login" /> : <Redirect to="/app" />}

                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route exact path="/app">
                            <Dashboard />
                        </Route>
                        <Route path="/app/population">
                            <Population />
                        </Route>
                        <Route path="/app/logout">
                            <Logout />
                        </Route>
                        <Route path="/app/login">
                            <Login />
                        </Route>
                    </Switch>
                </Router>
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
