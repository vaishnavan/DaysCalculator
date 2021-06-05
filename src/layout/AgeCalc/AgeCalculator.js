import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './age.css';

function AgeCalculator() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [show, setShow] = useState(false)
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);

    const startChange = (e) => {
        setStartDate(e.target.value);
    }

    const endChange = (e) => {
        setEndDate(e.target.value);
    }
    
    const calculate = (e) => {
        e.preventDefault();
        if(startDate === '' && endDate === ''){
            setShow(false)
        }
        else{
            setShow(true)
        }
        const date1 = new Date(startDate);
        const date2 = new Date(endDate);
        var date1yea = date1.getFullYear();
        var date2yea = date2.getFullYear();
        var date1Mon = date1.getMonth()
        var date2Mon = date2.getMonth()
        var date1Day = date1.getDay()
        var date2Day = date2.getDay()
        console.log(date1Day);

        var months = [31, 28, 31, 30, 31, 30, 31,
            31, 30, 31, 30, 31]

        if(date1Day > date2Day){
            date2Day = date2Day+months[date1Mon-1];
            date2Mon = date2Mon - 1;
        }

        if(date1Mon > date2Mon){
           date2yea = date2yea -1;
           date2Mon = date2Mon + 12;
        }

        setDay(date2Day - date1Day);
        setMonth(date2Mon - date1Mon);
        setYear(date2yea - date1yea);
    }


    return (
        <div>
            {/* going to design using bootstrap */}
            <div className="age-calcMain container p-5">
                <p>Age Calculator</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" name="startDate" required={true} placeholder="Start Date" onChange={startChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" name="startDate" required={true} placeholder="End Date" onChange={endChange} />
                    </Form.Group>
                    <Button variant="outline-info" onClick={calculate}>Calculate</Button>
                </Form>
                {show ?
                <div className="p-3 card mt-3">
                    <p style={{fontWeight:"700"}}>{year} year's and {month} month's old</p>
                </div>
                :
                ''
                }
            </div>
        </div>
    )
}

export default AgeCalculator
