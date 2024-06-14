import React, { useState, useEffect } from 'react';
import Card from "./Card";
import reviewsData from '../data/reviews_data.json';
 
const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <div className=" bg-blue-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Customer Reviews</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewList;

 