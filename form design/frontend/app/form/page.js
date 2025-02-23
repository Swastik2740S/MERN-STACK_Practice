"use client"; // Required for Next.js client-side components

import { useState } from "react";
import axios from "axios";
import Link from "next/link";


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", age: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setMessage(res.data.msg);
            setFormData({ name: "", email: "", age: "" }); // Reset form after submission
        } catch (error) {
            setMessage("Error: " + (error.response?.data?.msg || "Something went wrong"));
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            {message && <p className="mb-4 text-red-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Submit
                </button>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    <Link href="/getusers">Click here to get users</Link>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
