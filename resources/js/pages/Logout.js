import React,{Component} from 'react';
import {connect} from 'react-redux';

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
        }).catch(e=>{
            console.log(e)
        })
    }

    render(){
        return(
            <div>
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
