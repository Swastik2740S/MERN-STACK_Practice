"use client"; // Required for Next.js client-side components

import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/getcontacts")
            .then(res => setContacts(res.data.contacts))
            .catch(err => console.error("Error fetching contacts:", err));
    }, []);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Saved Contacts</h2>
            {contacts.length === 0 ? (
                <p className="text-gray-500">No contacts found</p>
            ) : (
                <ul className="list-disc list-inside">
                    {contacts.map((contact) => (
                        <li key={contact._id} className="mb-2">
                            <span className="font-medium">{contact.name}</span> - {contact.email} - {contact.age}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Contacts;
