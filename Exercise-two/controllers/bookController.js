const book = require('../models/book');

exports.getBooks = async (req, res) => {
  const books = await book.find();
  res.json(books);
}

exports.getBookById = async (req, res) => {
  const book = await book.findById(req.params.id);
  res.json(book);
}

exports.createBook = async (req, res) => {
  const newBook = await book.create(req.body);
  res.json(newBook);
}

exports.updateBook = async (req, res) => {
  const updatedBook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBook);
}

exports.deleteBook = async (req, res) => {
  const deletedBook = await book.findByIdAndDelete(req.params.id);
  res.json(deletedBook);
}
