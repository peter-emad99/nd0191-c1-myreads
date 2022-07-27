import React from "react";
import * as BooksAPI from "../BooksAPI";

function Book({ book, addBook }) {
	// const selectElement = useRef();

	/**@param {Event} e */
	function changeShelf(e) {
		let shelf = e.target.value;
		BooksAPI.update(book, shelf);
		book.shelf = shelf;
		addBook(book);
	}
	const {
		authors,
		title,
		imageLinks: { smallThumbnail },
	} = book;
	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${smallThumbnail})`,
						}}
					></div>
					<div className="book-shelf-changer">
						<select defaultValue={book.shelf} onChange={changeShelf}>
							<option value="none" disabled>
								Move to...
							</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors} </div>
			</div>
		</li>
	);
}

export default Book;
