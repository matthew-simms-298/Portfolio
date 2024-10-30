"use client";

import { useRef } from "react";
import React from "react";

// ENVIRONMENT VARIABLES


export default function ContactForm() {
  
  return (
    <form className="bg-base-100 flex flex-col w-1/2 p-10 justify-between rounded"
    >
      <div>
        <p className="italic">"*" means it is a required field</p>
        {/* FIRST + LAST NAME */}
        <div className="flex flex-row justify-between my-3 w-full">
          <input
            className="w-1/2 h-16 border outline-none border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 mr-3 transition duration-500
            focus:text-white
            focus:placeholder-white
            focus:border-white
            hover:border-white"
            type="text"
            required
            placeholder="First Name *"
            name="user_name"
          ></input>
          <input
            className="w-1/2 h-16 border outline-none border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 ml-3 transition duration-500
            focus:text-white
            focus:placeholder-white
            hover:border-white
            focus:border-white"
            type="text"
            required
            placeholder="Last Name *"
            name="user_name"
          ></input>
        </div>
        {/* EMAIL ADDRESS */}
        <input
          className="w-full outline-none h-16 border border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 my-3 transition duration-500
            focus:text-white
            focus:placeholder-white
            hover:border-white
            focus:border-white"
          type="email"
          required
          placeholder="Email *"
          name="user_email"
        ></input>
        {/* EMAIL SUBJECT */}
        <input
          className="w-full h-16 border outline-none border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 my-3 transition duration-500
            focus:text-white
            focus:placeholder-white
            hover:border-white
            focus:border-white"
          type="text"
          required
          placeholder="Subject *"
        ></input>
        {/* EMAIL MESSAGE CONTENT */}
        <textarea
          className="resize-none break-words outline-none h-72 w-full border border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 my-3 transition duration-500
            focus:text-white
            focus:placeholder-white
            hover:border-white
            focus:border-white"
          required
          placeholder="Enter you're message here *"
          name="message"
        ></textarea>
      </div>
      <input
        type="submit"
        placeholder="Send"
        className="btn btn-outline h-16 w-full border rounded-none duration-500"
      ></input>
    </form>
  );
}
