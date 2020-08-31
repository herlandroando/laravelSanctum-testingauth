import React from 'react';
import { useForm } from "react-hook-form"
import Axios from 'axios';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function Login(props) {
    const { register, handleSubmit, watch, errors } = useForm()
    const dispatch = useDispatch()
    const onSubmit = data => {
        console.log(data);
        Axios.get('/sanctum/csrf-cookie').then((response) => {
            Axios.post("/api/login", data).then((response) => {
                console.log(response)
                dispatch({ type: "LOGIN_USER", payload: response.data })
                toast.success("Login Succesfully!")
            }).catch(err => {
                console.log(err)
                toast.error("The provided credential are incorrect!")
            })
        })
    };

    // console.log(watch("email")); // watch input value by passing the name of it

    return (
        <form style={{height:"100vh"}} onSubmit={handleSubmit(onSubmit)}>

            <div className="h-100 w-100 position-absolute loginbg1" >
                <span className="copyrightbg"><a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=407703">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=407703">Pixabay</a></span>
                <div className=" w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}  >

                </div>
            </div>
            <div className="container-fluid h-100">
                <div className=" h-100 ">

                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-6 bg-secondary p-5 rounded text-white">
                                <h4 className="mb-4">Login on SIK Bantul</h4>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Email</label>
                                    <input type="text" name="email" className="form-control" id="formGroupExampleInput"
                                    placeholder="Example input" ref={register(
                                        {
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: "Email with wrong pattern!"
                                            },
                                            required: { value: true, message: "Need email for verification!" }
                                        })
                                    }
                                    />
                                    <span className="badge badge-danger">{errors?.email?.message}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Password</label>
                                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2"
                                    placeholder="Another input" ref={
                                        register(
                                            {
                                                minLength: { value: 8, message: "Password usually minimum 8 characters!" },
                                                required: { value: true, message: "Need password for verification!" }
                                            }
                                        )
                                    } />
                                    <span className="badge badge-danger">{errors?.password?.message}</span>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                </div>
            </div>

        </form>);
}

export default Login
