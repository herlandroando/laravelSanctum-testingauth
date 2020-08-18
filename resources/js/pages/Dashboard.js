import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {}
        }
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

    render() {
        const Profile = () =>{
            let str = ""
            for (const [key, value] of Object.entries(this.state.profil)) {
                str += key+' : ' +value+'/n';
            }
            console.log(str)
            return str;
        }
        return (
            <div>
                DASHBOARDSss
                <Profile/>
            </div>
        )
    }
}

export default Dashboard
