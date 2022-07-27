import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf({ shelfTitle, books, addBook }) {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfTitle}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book) => (
						<Book addBook={addBook} key={book.id} book={book} />
					))}
				</ol>
			</div>
		</div>
	);
}
BookShelf.propTypes = {
	books: PropTypes.array.isRequired,
	addBook: PropTypes.func.isRequired,
	shelfTitle: PropTypes.string.isRequired,
};
export default BookShelf;
