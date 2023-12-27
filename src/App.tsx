import { useState } from 'react';
import allQuotesData from './assets/allQuotesData.json';
import './App.css';

interface Quote {
	text: string;
	author: string;
}

const getRandomQuote = (quotesArray: Quote[]): Quote => {
	const randomIndex = Math.floor(Math.random() * quotesArray.length);
	return quotesArray[randomIndex];
};

function App() {
	const [currentQuote] = useState<Quote | null>(getRandomQuote(allQuotesData));

	return (
		<div>
			<p>"{currentQuote?.text ?? 'No quote available'}"</p>
			<p>- {currentQuote?.author ?? 'Unknown author'}</p>
		</div>
	);
}

export default App;
