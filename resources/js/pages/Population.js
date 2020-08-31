import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import { toast } from 'react-toastify';
import { useForm, Controller } from "react-hook-form"
import Axios from "axios"

const Population = () => {
    const holderData = useSelector(state => state.holderData)
    const welfareData = useSelector(state => state.welfareData)
    const reasonData = useSelector(state => state.reasonData)
    const domicileData = useSelector(state => state.domicileData)
    const kbprogramData = useSelector(state => state.kbprogramData)

    const { register, handleSubmit, errors, control } = useForm()


    const onSubmit = data => {

        Axios.get('/sanctum/csrf-cookie').then((response) => {
            Axios.post("/api/populations", data).then((response) => {
                console.log(response)
                toast.success("Population Update Succesfully!")
            }).catch(err => {
                console.log(err)
                toast.error("The provided input are incorrect!")
            })
        })
    }


    const OptionMaker = (props) => {
        let option = []
        if (props.type === "holder") {
            option = holderData.map((e) => {
                return (<option key={uniqueId("opt")} value={e.id}>{e.name}</option>)
            })
        }
        if (props.type === "domicile") {
            option = domicileData.map((e) => {
                return (<option key={uniqueId("opt")} value={e.id}>{e.name}</option>)
            })
        }
        if (props.type === "reason") {
            option = reasonData.map((e) => {
                if (e.abb == "-")
                    e.abb = e.name.toUpperCase()
                return (<option key={uniqueId("opt")} value={e.id}>{e.name + " (" + e.abb + ")"}</option>)
            })
        }
        if (props.type === "welfare") {
            option = welfareData.map((e) => {
                if (e.abb == "-")
                    e.abb = e.name.toUpperCase()
                return (<option key={uniqueId("opt")} value={e.id}>{e.name + " (" + e.abb + ")"}</option>)
            })
        }
        if (props.type === "kbprogram") {
            option = kbprogramData.map((e) => {
                if (e.abb == "-")
                    e.abb = e.name.toUpperCase()
                return (<option key={uniqueId("opt")} value={e.id}>{e.name + " (" + e.abb + ")"}</option>)
            })
        }
        return (option)
    }

    return (
        <div className="container h-100">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-lg-6">
                    <h4>Input Penduduk Baru</h4>
                    <div className="form-group">
                        <label htmlFor="iwife_name">Nama Istri</label>
                        <input type="text" className="form-control" name="wife_name" id="iwife_name" placeholder="Nama istri..." ref={
                            register(
                                {
                                    required: { value: true, message: "Mohon di isi data nama istri!" }
                                }
                            )} />
                        <span className="badge badge-danger">{errors?.wife_name?.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ihusband_name">Nama Suami</label>
                        <input type="text" className="form-control" name="husband_name" id="ihusband_name" placeholder="Nama suami..." ref={
                            register(
                                {
                                    required: { value: true, message: "Mohon di isi data nama suami!" }
                                }
                            )} />
                        <span className="badge badge-danger">{errors?.husband_name?.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="itotal_child">Total Anak</label>
                        <input type="number" className="form-control" name="total_child" id="itotal_child" placeholder="Total anak..." defaultValue={0} ref={register()} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                            <label htmlFor="iwife_birthday">Tanggal Lahir Istri</label>
                            <div>
                                <Controller
                                    control={control}
                                    name="wife_birthday"
                                    rules={{ required: { value: true, meessage: "Mohon di isi data tanggal lahir istri!" } }}
                                    render={({ onChange, onBlur, value }) => (
                                        <ReactDatePicker
                                            dateFormat="dd-MM-yyyy"
                                            id="iwife_birthday"
                                            name="wife_birthday"
                                            className="form-control"
                                            selected={value}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            maxDate={new Date()}
                                            placeholderText="Tanggal lahir anak terakhir..." />
                                    )}
                                />
                            </div>
                            <span className="badge badge-danger">{errors?.wife_birthday?.message}</span>

                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="ilastchild_birthday">Tanggal Lahir Anak Terakhir</label>
                            <div>
                                <Controller
                                    control={control}
                                    name="lastchild_birthday"
                                    // name="lastchild_birthday"
                                    rules={{ required: { value: true, meessage: "Mohon di isi data tanggal lahir anak terakhir!" } }}
                                    render={({ onChange, onBlur, value }) => (
                                        <ReactDatePicker
                                            dateFormat="dd-MM-yyyy"
                                            id="ilastchild_birthday"
                                            name="lastchild_birthday"
                                            className="form-control"
                                            selected={value}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            maxDate={new Date()}
                                            placeholderText="Tanggal lahir anak terakhir..." />
                                    )}
                                />

                            </div>
                            <span className="badge badge-danger">{errors?.lastchild_birthday?.message}</span>

                        </div>
                        <small className="text-muted">Kami membutuhkan tanggal lahir agar umur dari istri dan anak terakhir dapat terkalkulasi otomatis dengan sistem.</small>
                    </div>
                    <div className="my-2 form-row">
                        <div className="custom-control row-lg-6 custom-switch">
                            <input type="checkbox" className="custom-control-input" name="pbi" id="ipbi" ref={register()}/>
                            <label className="custom-control-label" htmlFor="ipbi">PBI</label>
                        </div>
                        <div className="custom-control ml-4 row-lg-6 custom-switch">
                            <input type="checkbox" className="custom-control-input" name="jkn" id="ijkn" ref={register()}/>
                            <label className="custom-control-label" htmlFor="ijkn">JKN</label>
                        </div>
                    </div>
                    <div className=" my-2 form-group">
                        <label htmlFor="idomicile">Domisili</label>
                        <select defaultValue="0" className="custom-select" name="domicile" id="idomicile" ref={
                            register()}>
                            <OptionMaker type="domicile"></OptionMaker>
                        </select>
                    </div>
                    <div className=" my-2 form-group">
                        <label htmlFor="iwelfare">Tingkat Kesehjateraan</label>
                        <select defaultValue="0" className="custom-select" name="welfare" id="iwelfare" ref={
                            register()}>
                            <OptionMaker type="welfare"></OptionMaker>
                        </select>
                    </div>

                </div>
                <div className="col-lg-6">
                    <h4>Input Partisipasi</h4>
                    <div className="form-group">
                        <label htmlFor="iholder">Organisasi Pemegang</label>
                        <select defaultValue="1" className="custom-select" name="holder" id="iholder">
                            <OptionMaker type="holder"></OptionMaker>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ikb">Program KB</label>
                        <select defaultValue="1" className="custom-select" name="kbprogram" id="ikb">
                            <OptionMaker type="kbprogram"></OptionMaker>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ireason">Alasan Mengikuti KB</label>
                        <select defaultValue="1" className="custom-select" name="reason" id="ireason">
                            <OptionMaker type="reason"></OptionMaker>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>


    )

}

export default Population
