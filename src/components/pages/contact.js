import React, { useState } from "react";
import "../styles/contact.css"

const Contact = () => {

    const [selectedOption, setSelectedOption] = useState("What type of photo session would you like to book with me?");

    const updateSelectedOption = (optionText) => {
        setSelectedOption(optionText);
    }

    return (
        <div className="fade-in d-flex my-5 flex-column align-items-center">
            <h1 className="gloock">CONTACT ME</h1>
            <div className="d-flex flex-column allura col-4 mb-3">
                <h3 className="ms-5">Please complete the form below</h3>
                <h3 className="me-5 align-self-end text-decoration-underline">I look forward to connecting with you!</h3>
            </div>
            <form className="fs-5 d-flex flex-column col-6 border border-light p-2 row g-1">
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input className="form-control" placeholder="Jane Doe" />
                </div>
                <div className="mb-3">
                    <label className="form-label">PHONE NUMBER</label>
                    <input className="form-control" placeholder="555-555-5555" />
                </div>
                <div className="mb-3">
                    <label className="form-label">EMAIL ADDRESS</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">INSTAGRAM HANDLE</label>
                    <input type="email" className="form-control" placeholder="optional" />
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">TYPE OF INQUIRY</label>
                    <button type="button" id="selectedOption" className="col-12 btn btn-light text-start dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedOption}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-start">
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Families')} >Families</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Couples')} >Couples</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Graduation')}>Graduation</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Maternity')}>Maternity</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Headshots')}>Headshots</button></li>
                    </ul>
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">YOUR INSPIRATION</label>
                    <textarea className="form-control" placeholder="Tell me all the fun details! Your inspiration for the shoot, date, desired location, ideas, etc." rows="3"></textarea>
                </div>
                <button className="submitBtn col-2 align-self-start">Submit</button>
            </form>
        </div>
    )
}

export default Contact;