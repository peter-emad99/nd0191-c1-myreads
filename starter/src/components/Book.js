import React, { useRef } from "react";
import * as BooksAPI from "../BooksAPI";

function Book({ book, addBook }) {
	// const selectElement = useRef();
	// selectElement.value = book.shelf;
	// console.log(selectElement.value);
	/**@param {Event} e */
	function changeShelf(e) {
		BooksAPI.update(book, e.target.value);
		addBook(book);
		// console.log(e.target.value);
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
						<select onChange={changeShelf}>
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
