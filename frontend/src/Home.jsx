import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/home');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="bg-[#fecdd3] text-black">
            <nav className="bg-[#ec4899] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a className="text-xl font-semibold">My Book Recommender</a>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/recommend" className="hover:text-gray-300">Recommend</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container mx-auto py-10">
                <h1 className="text-4xl font-bold mb-10">Top 50 Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.book_name && books.book_name.map((title, index) => (
                        <div key={index} className="bg-[#f9a8d4] p-4 rounded-lg shadow-lg">
                            <img className="w-full h-64 object-cover rounded-t-lg mb-4" src={books.image[index]} alt="Book Image" />
                            <p className="text-xl font-medium">{title}</p>
                            <h4 className="text-lg">{books.author[index]}</h4>
                            <h4 className="text-lg">Votes - {books.votes[index]}</h4>
                            <h4 className="text-lg">Rating - {books.rating[index]}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
