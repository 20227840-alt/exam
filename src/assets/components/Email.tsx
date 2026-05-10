import { useState } from "react";
import emailjs from "@emailjs/browser";
type FormData = {
name: string;
email: string;
message: string;
};
export default function Email() {
const [formData, setFormData] = useState<FormData>({
name: "",
email: "",
message: "",
});
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");
// Handle input change
const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

// Validate inputs
const validate = () => {
if (!formData.name || !formData.email || !formData.message) {
return "Please fill in all fields.";
}
const emailPattern = /\S+@\S+\.\S+/;
if (!emailPattern.test(formData.email)) {
return "Invalid email format.";
}
return "";
};
// Submit form
const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
const error = validate();
if (error) {
setStatus(error);
return;
}
setLoading(true);
setStatus("");
try {
const response = await emailjs.send(
import.meta.env.VITE_EMAIL_SERVICE_ID,
import.meta.env.VITE_EMAIL_TEMPLATE_ID,
{
from_name: formData.name,
from_email: formData.email,
message: formData.message,
},
import.meta.env.VITE_EMAIL_PUBLIC_KEY
);
console.log("SUCCESS:", response);
setStatus("Message sent successfully!");
setFormData({
name: "",
email: "",
message: "",
});
} catch (error) {
console.error("ERROR:", error);
setStatus("Failed to send message.");
}
setLoading(false);
};
return (
<div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
<h2>Email Me</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}

style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
/>
<input
type="email"
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}
style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
/>
<textarea
name="message"
placeholder="Your Message"
value={formData.message}
onChange={handleChange}
style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
/>
<button
type="submit"
disabled={loading}
style={{ width: "100%", padding: "10px" }}
>
{loading ? "Sending..." : "Send Message"}
</button>
</form>
<p>{status}</p>
</div>
);
}