import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", contact: "", comments: "" });

    } catch (error) {
      console.error(error);
      alert("Error submitting contact form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name"
        value={formData.name} onChange={handleChange} />
      <input type="text" name="contact" placeholder="Contact Number"
        value={formData.contact} onChange={handleChange} />
      <textarea name="comments" placeholder="Comments"
        value={formData.comments} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;