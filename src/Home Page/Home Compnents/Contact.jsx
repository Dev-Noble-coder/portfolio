import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-24" id="contact">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section: Image */}
                <div className="flex justify-center">
                    <img
                        src="https://img.freepik.com/free-photo/studio-shot-beautiful-happy-curly-woman-gestures-smiles-wears-ski-goggles_273609-32800.jpg?ga=GA1.1.384133121.1729851340&semt=ais_hybrid"
                        alt="Contact Illustration"
                        className="rounded-xl object-cover w-full max-w-[400px] sm:max-w-[700px] lg:max-w-[800px] h-auto"
                    />
                </div>

                {/* Right Section: Form */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Get in Touch
                    </h2>
                    <form className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter your message"
                                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#FF104F] text-white font-semibold rounded-lg shadow-md hover:bg-[#d33a63] transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
