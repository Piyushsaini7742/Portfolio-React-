import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
            <div className="bg-gray-700 shadow-lg rounded-lg max-w-4xl w-full p-8 text-white flex flex-col items-center">
                <h2 className="text-4xl font-bold text-white text-center mb-4">Contact Us</h2>
                <p className="text-center text-blue-300 mb-8">We'd love to hear from you! Fill out the form below or reach us directly at our email or phone number.</p>

                <div className="w-full flex flex-col items-center">
                    {/* Contact Form */}
                    <form className="space-y-6 w-full max-w-md">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-blue-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-blue-400 focus:border-blue-400 sm:text-sm bg-gray-500 text-white placeholder-blue-300"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-blue-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-blue-400 focus:border-blue-400 sm:text-sm bg-gray-500 text-white placeholder-blue-300"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-blue-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-blue-400 focus:border-blue-400 sm:text-sm bg-gray-500 text-white placeholder-blue-300"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-blue-900 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
