import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {}
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get("/api/user").then(response => {
            console.log(response.data)
            this.setState({
                profil: response.data
            })
        }).catch(e => {
            console.log(e)
        })
    }

    handleClick() {
        toast("Test")
    }

    render() {
        const Profile = () => {
            let items = []
            for (const [key, value] of Object.entries(this.state.profil)) {
                items.push(<li key={key} className="list-group-item">{key} : {value} </li>);
            }
            return (
                <ul className="list-group list-group-flush">
                    {items.length == 0 && <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                    {items}
                </ul>
            );
        }
        return (
            <div className="container my-5">
                <div className="card text-center bg-secondary" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="/images/loginbg1.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">Profile</h4>
                        <p className="card-text">Check who profile was login. </p>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <Profile />
                </div>
                {/* <button type="button" className="btn btn-primary" onClick={this.handleClick}>TOAST!</button> */}
            </div>
        )
    }
}

export default Dashboard
