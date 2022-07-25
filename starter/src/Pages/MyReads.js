import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
function MyReads() {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		BooksAPI.getAll().then((data) => setBooks(data));
	}, []);
	console.log(books);
	return (
		<div>
			{books.map((book) => (
				<p key={book.id}>{book.title}</p>
			))}
		</div>
	);
}

export default MyReads;
