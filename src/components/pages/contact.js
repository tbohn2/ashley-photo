import React, { useState, useRef } from "react";
import "../styles/contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {

    // const [formState, setFormState] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     instagram: '',
    //     inquiryType: '',
    //     message: '',
    // });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const [selectedOption, setSelectedOption] = useState("What type of photo session would you like to book with me?");

    const updateSelectedOption = (optionText) => {
        setSelectedOption(optionText);
    }

    return (
        <div className="fade-in d-flex my-5 flex-column align-items-center">
            <h1 className="gloock">CONTACT ME</h1>
            <div className="d-flex flex-column allura col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 mb-3">
                <h3 className="ms-5">Please complete the form below</h3>
                <h3 className="me-5 align-self-end text-decoration-underline">I look forward to connecting with you!</h3>
            </div>
            <form ref={form} onSubmit={sendEmail} className="fs-5 d-flex flex-column col-xxl-6 col-8 border border-light p-2 row g-1">
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input name="name" className="form-control" placeholder="Jane Doe" />
                </div>
                <div className="mb-3">
                    <label className="form-label">PHONE NUMBER</label>
                    <input name="phone" className="form-control" placeholder="555-555-5555" />
                </div>
                <div className="mb-3">
                    <label className="form-label">EMAIL ADDRESS</label>
                    <input name="email" type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">INSTAGRAM HANDLE</label>
                    <input name="instagram" className="form-control" placeholder="optional" />
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">TYPE OF INQUIRY</label>
                    <button name="inquiryType" type="button" id="selectedOption" className="col-12 btn btn-light text-start dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <textarea name="message" className="form-control" placeholder="Tell me all the fun details! Your inspiration for the shoot, date, desired location, ideas, etc." rows="3"></textarea>
                </div>
                <button className="submitBtn col-4 col-sm-3 align-self-start">Submit</button>
            </form>
        </div>
    )
}

export default Contact;