const notesCtrl = {};
const Note = require("../models/Notes");

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find()
  res.json(notes);
};
notesCtrl.createNote = async (req, res) => {
  const {title, content, date, author} = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author
  })
  // console.log(newNote)
  await newNote.save()
  res.json({message: "note created"})
};
notesCtrl.updateNote = async(req, res) => {
  const {title, content, author} = req.body
  await Note.findOneAndUpdate(req.params.id, {
    title,
    content,
    author
  })
  res.json({ message: "note updated" });
};
notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id)
  // console.log(note)
  res.json(note);
};
notesCtrl.deleteNote = async(req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: "note delete" });
};
module.exports = notesCtrl;
