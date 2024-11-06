"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);

        try {
            const response = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    honeypot: '',
                    accessKey: 'c8419351-c1ee-4867-9c47-a0bb22408406',
                    subject: 'Contact us from - example.com',
                    replyTo: '@',
                    redirectTo: 'https://example.com/contact/success'
                }),
            });

            if (response.ok) {
                setSuccess(true);
            }
        } catch {
            // Optionally handle network errors here if needed
        }
    };

    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            Each product reflects our commitment to quality and a passion for baking. At &quot;The Sweet Treat,&quot; we pour our hearts into every creation, ensuring that every bite is a moment to savor.
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>Vasco da Gama, Goa</p>
                                    <p>403802</p>
                                </dd>
                            </div>
                            <div className="mt-6 text-gray-600">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
                                    <span className="ml-3">+91 8767986326</span>
                                </dd>
                            </div>
                            <div className="mt-3 text-gray-600">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                                    <span className="ml-3">thesweettreat01@gmail.com</span>
                                </dd>
                            </div>
                            <div className="mt-3 text-gray-600">
                                <dt className="sr-only">Instagram</dt>
                                <dd className="flex">
                                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                                    <a href="https://instagram.com/yourprofile" className="ml-3 hover:text-indigo-500">
                                        thesweettreat.01
                                    </a>
                                </dd>
                            </div>
                            <div className="mt-3 text-gray-600">
                                <dt className="sr-only">WhatsApp</dt>
                                <dd className="flex">
                                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                                    <a href="https://wa.me/918767986326" className="ml-3 hover:text-indigo-500">
                                        Chat on WhatsApp
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        {success ? (
                            <div className="text-green-600 text-lg font-semibold">
                                Your message has been sent successfully!
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                        placeholder="Message"
                                    />
                                </div>
                                <input type="text" name="honeypot" style={{ display: 'none' }} />
                                <input type="hidden" name="accessKey" value="7256395e-dfe5-4cc7-849f-4bb10ea53998" />
                                <input type="hidden" name="subject" value="Contact us from - example.com" />
                                <input type="hidden" name="replyTo" value="@" />
                                <input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}