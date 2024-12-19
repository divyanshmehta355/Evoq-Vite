import React, { useState } from "react";
import { databases } from "../lib/appwrite.ts";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID!,
        import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID!,
        "unique()",
        {
          name: name,
          email: email,
          phone: phone,
          message: message,
        }
      );

      console.log("Form submitted successfully:", response);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full bg-[#d9d9d9] text-black">
      <h1 className="text-6xl text-center font-bold pt-4">GET INTO TOUCH</h1>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold">HOW CAN WE HELP?</h1>
          <p className="text-lg p-2 text-center md:text-left">
            We&apos;d love to hear from you! Whether you have a question, need a
            quote, or want to discuss a project, our team is here to help.
            Please use the form below to get in touch with us, and we&apos;ll
            get back to you as soon as possible.
          </p>

          <div className="flex flex-col gap-2 justify-start w-full md:w-2/3 pl-8 pt-8 text-center md:text-left">
            <h2 className="text-2xl font-medium">CONTACTS</h2>
            <p>+91 1234567890</p>
            <p>contact@evoq.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center gap-4 w-full md:w-1/2 mt-8 mb-8 p-4">
          <form
            className="w-full flex flex-col items-center gap-1"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl">WHAT&apos;S YOUR NAME?</h2>
            <input
              type="text"
              className="bg-transparent w-full md:w-1/2 p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <h2 className="text-3xl">WHAT&apos;S YOUR EMAIL?</h2>
            <input
              type="email"
              className="bg-transparent w-full md:w-1/2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <h2 className="text-3xl">WHAT&apos;S YOUR PHONE?</h2>
            <input
              type="text"
              className="bg-transparent w-full md:w-1/2 p-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <h2 className="text-3xl">HOW CAN WE HELP?</h2>
            <input
              type="text"
              className="bg-transparent w-full md:w-1/2 p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="w-full md:w-1/2 flex justify-end mt-4">
              <button
                type="submit"
                className="align-end bg-[#00a8cc] pt-2 pb-2 pl-6 pr-6 rounded-xl text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
