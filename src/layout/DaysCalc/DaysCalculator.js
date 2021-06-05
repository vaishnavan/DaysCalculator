import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import numeral from 'numeral';
import './days.css';

function DaysCalculator() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [show, setShow] = useState(false)
    const [ans, setAns] = useState(null);
    const [month, setMonth] = useState(null);
    const [week, setWeek] = useState(null);
    const [hour, setHour] = useState(null);
    const [min, setMin] = useState(null);
    const [sec, setSec] = useState(null);

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
        const myData =Math.abs(date2 - date1);
        var calc = myData/(1000 * 60 * 60 * 24);
        var hours = myData/(1000 * 60 * 60);
        var minus = myData/(1000 * 60);
        var seconds = myData/(1000);
        var weeks = Math.round(calc/7)
        var months = Math.round(calc/30)
        setAns(calc)
        setMonth(months)
        setWeek(weeks)
        setHour(hours);
        setMin(minus)
        setSec(seconds);
    }

    return (
        <div>
            {/* going to design using bootstrap */}
            <div className="days-calcMain container p-5">
                <p>Days Calculator</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" placeholder="Start Date" onChange={startChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" placeholder="End Date" onChange={endChange} />
                    </Form.Group>
                    <Button variant="outline-info" onClick={calculate}>Calculate</Button>
                </Form>
                {show ?
                <div className="p-3 card mt-3">
                    <h3>{numeral(ans).format("0,0")} days</h3>
                    <h3>{numeral(week).format("0,0")} weeks</h3>
                    <h3>{numeral(month).format("0,0")} months</h3>
                    <h3>{numeral(hour).format("0,0")} hours</h3>
                    <h3>{numeral(min).format("0,0")} minutes</h3>
                    <h3>{numeral(sec).format("0,0")} seconds</h3>
                </div>
                :
                ''
                }
            </div>
        </div>
    )
}

export default DaysCalculator
