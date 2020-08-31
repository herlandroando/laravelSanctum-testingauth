import React,{Component} from 'react';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        axios.get("/api/logout").then(response=>{
            this.props.dispatch({
                type:"LOGOUT_USER",
                payload: "",
            })
            toast.success("You has been log out!")
        }).catch(e=>{
            console.log(e)
        })
    }

    render(){
        return(
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        dispatch
    }
}

export default connect(mapDispatchToProps)(Logout)
