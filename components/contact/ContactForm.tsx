"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const FORMSPREE_ID = "mgejbgrw";
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="p-8 bg-secondary rounded">
        <p className="text-center text-lg md:text-xl">
          Thank you! Your submission has been received!
        </p>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <form className="space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>
          <input
            className="contact-input"
            type="text"
            name="name"
            id="name"
            required
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="contact-input"
            type="email"
            name="email"
            id="email"
            required
            placeholder="johnDoe@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Subject</label>
          <input
            className="contact-input"
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Issue 1"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="contact-input"
            name="message"
            id="message"
            rows={4}
            placeholder="Type your message here ..."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="btn-primary px-6 py-3"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
