import React, { useState } from "react";

// import CountryCode from "../../../data/countrycode.json"

const ContactUsForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [errors, setErrors] = useState({});

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const newErrors = {};
    //     if (!firstName) newErrors.firstName = 'Please enter your first name.';
    //     if (!lastName) newErrors.lastName = 'Please enter your last name.';
    //     if (!email) newErrors.email = 'Please enter your email address.';
    //     if (!phoneNo) newErrors.phoneNo = 'Please enter your phone number.';
    //     if (!message) newErrors.message = 'Please enter your message.';
    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors);
    //         return;
    //     }

    //     const toastId = toast.loading("Loading...");
    //     try {
    //         const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, {
    //             firstName,
    //             lastName,
    //             email,
    //             message,
    //             phoneNo
    //         });

    //         if (!res.data.success) {
    //             toast.error(res.data.message);
    //         } else {
    //             toast.success(res.data.message);
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.status === 401) {
    //             toast.error(error.response.data.message);
    //         } else {
    //             toast.error("Failed to send message");
    //         }
    //     } finally {
    //         toast.dismiss(toastId);
    //     }
    // };

    return (
        <form  className="flex flex-col gap-7 bg-[#1e40af]">
            <div className="flex flex-col gap-5 lg:flex-row">
                {/* FIRST NAME */}
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter first name"
                        className="border rounded-md p-2"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                        <span className="text-[12px] text-red-600">{errors.firstName}</span>
                    )}
                </div>

                {/* LAST NAME */}
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Enter last name"
                        className="border rounded-md p-2"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                        <span className="text-[12px] text-red-600">{errors.lastName}</span>
                    )}
                </div>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    className="border rounded-md p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                    <span className="text-[12px] text-red-600">{errors.email}</span>
                )}
            </div>

            {/* PHONE NUMBER */}
            <div className="flex flex-col gap-2">
                <label htmlFor="phoneNo" className="text-sm font-semibold text-gray-700">Phone Number</label>
                <div className="flex gap-5">
                    <div>
                        <select
                            id="countryCode"
                            className="border rounded-md p-2 w-[77px]"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                        >
                            {/* Map your country codes here */}
                            <option value="+91">+91 - India</option>
                            {/* Add other options as needed */}
                        </select>
                    </div>
                    <div className="w-[calc(100%-87px)]">
                        <input
                            type="text"
                            id="phoneNo"
                            placeholder="12345 67890"
                            className="border rounded-md p-2 w-[100%]"
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                        />
                    </div>
                </div>
                {errors.phoneNo && (
                    <span className="text-[12px] text-red-600">{errors.phoneNo}</span>
                )}
            </div>

            {/* MESSAGE BOX */}
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                    id="message"
                    cols="30"
                    rows="6"
                    placeholder="Enter your message here"
                    className="border rounded-md p-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                    <span className="text-[12px] text-red-600">{errors.message}</span>
                )}
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                className="rounded-md bg-orange-500 px-6 py-3 text-center text-white font-bold shadow-md transition-all duration-200 hover:scale-95 hover:shadow-none disabled:bg-gray-500"
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactUsForm;
