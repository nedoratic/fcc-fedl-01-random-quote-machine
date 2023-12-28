import React, { useState } from 'react';
import allQuotesData from './assets/allQuotesData.json';
import './App.css';

// Define the structure of a quote
interface Quote {
	text: string;
	author: string;
}

// Function to get a random quote from an array of quotes
const getRandomQuote = (quotesArray: Quote[]): Quote | null => {
	// Generate a random index
	const randomIndex = Math.floor(Math.random() * quotesArray.length);
	// Return the quote at the random index or null if the array is empty
	return quotesArray[randomIndex] || null;
};

// Main component
function App() {
	// Use state to keep track of the current quote
	const [currentQuote] = useState<Quote | null>(getRandomQuote(allQuotesData));
	// Destructure currentQuote or provide default values
	const { text, author } = currentQuote || { text: 'No quote available', author: 'Unknown author' };
	// Render the quote in a simple HTML structure
	return (
		<div id="quote-box">
			<div className="quote-content">
				<h2 id="text">
					<i className="fa-solid fa-quote-left"></i> {text} <i className="fa-solid fa-quote-right"></i>
				</h2>
				<h4 id="author">- {author}</h4>
				<button>
					<a className="twitter-share-button" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" - ${author}`)}`} target="_blank">
						X
					</a>
				</button>
				<button id="new-quote" href="">
					New Quote
				</button>
			</div>
		</div>
	);
}

// Export the component as the default export of the file
export default App;
