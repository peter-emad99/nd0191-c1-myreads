import React from "react";
import Book from "./Book";

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

export default BookShelf;
