import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import { useEffect, useState } from "react";
import Book from "../components/Book";

function SearchPage({ books, addBook }) {
	const [query, setQuery] = useState("");
	const [searchedBooks, setSearchedBooks] = useState([]);

	useEffect(() => {
		if (query !== "") {
			BooksAPI.search(query, 10).then((books) =>
				!books.error ? setSearchedBooks(books) : setSearchedBooks([])
			);
		} else {
			setSearchedBooks([]);
		}
	}, [query]);

	function handleSearch(e) {
		// setInterval(setQuery(e.target.value), 10000);
		// TODO: throttling and debouncing
		setQuery(e.target.value);
	}
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						onChange={handleSearch}
						type="text"
						placeholder="Search by title, author, or ISBN"
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{searchedBooks.length !== 0
						? searchedBooks.map((book) => (
								<Book key={book.id} book={book} addBook={addBook} />
						  ))
						: ""}
				</ol>
			</div>
		</div>
	);
}

export default SearchPage;
