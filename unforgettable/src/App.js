import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

export default function App() {
    // Check if databases exist, create if they dont

    return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
