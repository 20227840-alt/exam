const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors( ));
app.use(express.json());

mongoose
  .connect("mongodb+srv://virtues:vjlayco@cluster0.n2dfplc.mongodb.net/apptech?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(console.error);

const contactSchema = new mongoose.Schema({
  name: String,
  contact: String,
  comments: String,
});

const User = mongoose.model("contact", contactSchema, "contact");

app.post("/contact", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User submitted successfully.", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/contact", async (req, res) => {
  try {
    const allContacts = await User.find({});
    res.json(allContacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));