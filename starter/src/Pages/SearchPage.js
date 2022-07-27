import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import { useEffect, useState } from "react";
import Book from "../components/Book";
import PropTypes from "prop-types";

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
					{searchedBooks.length !== 0 && query
						? searchedBooks
								.filter((book) => book?.imageLinks?.smallThumbnail)
								.map((book) => {
									let existedBook = books.find(
										(existedBook) => existedBook.id === book.id
									);
									return existedBook ? (
										<Book key={book.id} book={existedBook} addBook={addBook} />
									) : (
										<Book key={book.id} book={book} addBook={addBook} />
									);
								})
						: ""}
				</ol>
			</div>
		</div>
	);
}
SearchPage.propTypes = {
	books: PropTypes.array.isRequired,
	addBook: PropTypes.func.isRequired,
};
export default SearchPage;
