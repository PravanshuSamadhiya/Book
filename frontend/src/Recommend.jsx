import React, { useState } from 'react';
import axios from 'axios';

const Recommend = () => {
    const [userInput, setUserInput] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setRecommendations([]);

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/recommend_books', { user_input: userInput });

            if (response.data.error) {
                setError(response.data.error);
            } else {
                setRecommendations(response.data.data);
            }
        } catch (err) {
            setError('An error occurred while fetching recommendations');
        }
    };

    return (
        <div className="bg-black text-white">
            <nav className="bg-[#00a65a] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a className="text-xl font-semibold">My Book Recommender</a>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/recommend" className="hover:text-gray-300">Recommend</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container mx-auto py-10">
                <h1 className="text-4xl font-bold mb-10">Recommend Books</h1>
                <form onSubmit={handleSubmit} className="mb-10">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Enter book title"
                        className="form-control mb-4"
                    />
                    <button type="submit" className="btn btn-lg bg-yellow-500 text-white">Get Recommendations</button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recommendations.map((book, index) => (
                        <div key={index} className="bg-[#f9a8d4] p-4 rounded-lg shadow-lg">
                            <img className="w-full h-64 object-cover rounded-t-lg mb-4" src={book[2]} alt="Book Image" />
                            <p className="text-xl font-medium">{book[0]}</p>
                            <h4 className="text-lg">{book[1]}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recommend;
