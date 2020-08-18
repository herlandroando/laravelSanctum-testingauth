import React, { Component } from "react";
// import SVGLoading from "../../../public/img/Spinner-1s-220px.svg";
// import PropTypes from 'prop-types';

class Loading extends Component {
    constructor(props) {

        super(props);

        this.state = {
            text: null,
            defaultText: 'Sedang mengambil resource dari server...'
        }
        // this.setLoading = this.setLoading.bind(this);
        this.random_item = this.random_item.bind(this);
        this._isMounted = false;
    }

    random_item() {
        const items = ["Sedang melakukan penggalian!", "Memasak kue tart!", "Menunggu dia yang sedang dimana...", "Aku tak tau apa itu"]
        return items[Math.floor(Math.random() * items.length)];
    }

    componentDidMount() {
        this._isMounted = true;
        this.timeout = setInterval(() => {
            if (this._isMounted)
            this.setState({ text: this.random_item() });
        }, 4000);
        // setTimeout(() => {
        //     this.setState({
        //         load:false,
        //     });
        // }, 10000);
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() {
        const sl = {
            width: "100%", height: "100%", backgroundColor: "white", overflow: "visible", position: "fixed", top: 0, left: 0, zIndex: 10000,
        }
        return (
            <div className="d-flex justify-content-center align-items-center text-center" style={ sl }>

                <div>
                    <div className="spinner-border" role="status" style={{ width: '10rem', height: '10rem' }}>
                        <span className="sr-only ">Loading...</span>
                    </div>

                    <h4 className="my-auto p-5" style={{ zIndex: 10001 }}>{this.state.text == null ? this.state.defaultText : this.state.text}</h4>

                </div>

            </div>

        );
    }
}

export default Loading;

// Loading.propTypes={
//     loading = PropTypes.bool.isRequired,
//     loadingCallback = PropTypes.func,

// }
