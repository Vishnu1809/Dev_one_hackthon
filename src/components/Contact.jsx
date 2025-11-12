import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Have an idea or collaboration? Drop a message below.
      </p>
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input name="name" placeholder="Your name" required className="border rounded p-2" />
        <input name="email" placeholder="Your email" required type="email" className="border rounded p-2" />
        <textarea name="message" placeholder="Your message" required className="border rounded p-2 h-32" />
        <button type="submit" className="bg-primary text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
