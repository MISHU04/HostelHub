import React, { useState } from 'react';
import './ComplaintStyles.css';

function Complaints() {
    const [formData, setFormData] = useState({
        names: '',
        room: '',
        roll: '',
        contact: '',
        problem: ''
    });
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/complaints", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.names,
                    roomNumber: formData.room,
                    rollNumber: formData.roll,
                    phoneNumber: formData.contact,
                    issueAvenue: formData.problem
                })
            });
            const result = await response.json();
            console.log(result);

            if (response.ok) {
                setAlertMessage('Complaint submitted successfully');
            } else {
                setAlertMessage('Failed to submit complaint. Please try again later.');
            }
            setFormData({
                names: '',
                room: '',
                roll: '',
                contact: '',
                problem: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className='wrap'>
                <header>
                    <h2 className="logo" >
                       
                    </h2>
                </header>
                <div className="wrapper">
                    <div className="form-box login">
                        <h2>What's Your Problem?</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input
                                    type="text"
                                    name="names"
                                    value={formData.names}
                                    onChange={handleChange}
                                    required
                                    placeholder="You are known as..."
                                />
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input
                                    type="number"
                                    name="room"
                                    value={formData.room}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Room Number?"
                                />
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input
                                    type="number"
                                    name="roll"
                                    value={formData.roll}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Roll Number?"
                                />
                            </div>
                            <div className="input-box">
                                <span className="icon"></span>
                                <input
                                    type="tel"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    placeholder="You can be contacted through.."
                                />
                            </div>
                            <div className="issue">
                                <span className="icon"></span>
                                <input
                                    type="text"
                                    maxLength={40}
                                    name="problem"
                                    value={formData.problem}
                                    onChange={handleChange}
                                    required
                                    placeholder="Problem..."
                                />
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Alert message */}
            {alertMessage && (
                <div className="alert">
                    {alertMessage}
                </div>
            )}
        </>
    );
}

export default Complaints;
