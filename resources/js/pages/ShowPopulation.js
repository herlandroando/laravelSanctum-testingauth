import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { uniqueId } from 'lodash';

const ShowPopulation = () => {
    const [dataPopulation, setDataPopulation] = useState([])

    useEffect(() => {
        let mounted = true;

        const loadData = async () => {
            const response = await Axios.get("/api/populations")
            if ("content" in response.data) {
                if (mounted)
                    setDataPopulation([{ content: response.data.content }])
            }
            else {
                if (mounted)
                    setDataPopulation(response.data)
            }

        }

        loadData();

        return () => {
            // When cleanup is called, toggle the mounted variable to false
            mounted = false;
        };
    },[])



    const ListPopulation = () => {
        if ("content" in dataPopulation[0]) {
            return (
                <h4>Empty Data!</h4>
            )
        }
        else {
            let list = []
            list = dataPopulation.map((e) => {
                return (<li className="list-group-item" key={uniqueId("list")} >{e.wife_name}</li>)
            })
            return (
                <ul className="list-group">
                    {list}
                </ul>
            )
        }

    }

    return (
        <div className="container">
            {dataPopulation == 0 &&
                <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
            {dataPopulation.length > 0 &&
                <ListPopulation />
            }
        </div>
    )
}

export default ShowPopulation;
