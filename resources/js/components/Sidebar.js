import React, {  useState, useEffect } from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { faBars, faColumns } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {

    const [toggled,setToggle] = useState(false)

    useEffect( ()=>{

    });

    const handleClick=(e)=>{
        if (toggled){
            setToggle(false)
            props.callback(false)
        }
        else{
            setToggle(true)
            props.callback(true)
        }
    }

    return (
        <div className={toggled?'sidebar bg-secondary side-active':'sidebar bg-secondary'}>
            <div className="d-flex justify-content-end">
            <i type="button" className="btn sidebar-btn "><FA icon={faBars} size="2x" onClick={handleClick}/></i>
            </div>
            <ul className="list-group">
                <li className="list-group-item active d-flex justify-content-end align-items-center"><h4 className="mr-auto">Dashboard</h4><i className="p-1"> <FA icon={faColumns} size="2x"></FA></i></li>
                <li className="list-group-item">Item</li>
                <li className="list-group-item disabled">Disabled item</li>
            </ul>
            <h4>test</h4>
        </div>
    )
}

export default Sidebar
