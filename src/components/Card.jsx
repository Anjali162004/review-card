import React from 'react';
import ReviewHighlighter from "./ReviewHighlighter";

const Card = ({ review }) => {
    const { rating_review_score, reviewer_name, source, date } = review;

    const renderStars = (rating, outOf) => {
        const stars = [];
        for (let i = 1; i <= outOf; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
            } else {
                stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // Empty star
            }
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <img
                    src={source.icon}
                    alt={source.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 mr-4"
                />
                <div>
                    <span className="text-gray-900 font-semibold text-lg">{reviewer_name}</span>
                    <span className="text-gray-500 text-sm ml-2">{date}</span>
                </div>
            </div>
            <ReviewHighlighter  data={review} />
             
            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                    <span className="text-gray-900 font-semibold mr-2">Rating:</span>
                    <div className="flex items-center">
                        {renderStars(rating_review_score, review.out_of || 5)}
                        <span className="text-gray-600 ml-2 text-sm">
                            {rating_review_score} / {review.out_of || 5}
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        src={source.icon}
                        alt={source.name}
                        className="w-10 h-10 rounded-full border-2 border-gray-200"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;


// import React from 'react';
// import ReviewHighlighter from "./ReviewHighlighter";
// import Tooltip from "./Tooltip";

// const Card = ({ review }) => {
//     const { rating_review_score, reviewer_name, source, date } = review;

//     const renderStars = (rating, outOf) => {
//         const stars = [];
//         for (let i = 1; i <= outOf; i++) {
//             if (i <= rating) {
//                 stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
//             } else {
//                 stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // Empty star
//             }
//         }
//         return stars;
//     };

//     return (
//         <div className="relative bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:z-20">
//             <div className="flex items-center mb-4">
//                 <img
//                     src={source.icon}
//                     alt={source.name}
//                     className="w-12 h-12 rounded-full border-2 border-gray-200 mr-4"
//                 />
//                 <div>
//                     <span className="text-gray-900 font-semibold text-lg">{reviewer_name}</span>
//                     <span className="text-gray-500 text-sm ml-2">{date}</span>
//                 </div>
//             </div>
//             <ReviewHighlighter data={review} />
//             <Tooltip data={review} />
//             <div className="flex justify-between items-center mt-6">
//                 <div className="flex items-center">
//                     <span className="text-gray-900 font-semibold mr-2">Rating:</span>
//                     <div className="flex items-center">
//                         {renderStars(rating_review_score, review.out_of || 5)}
//                         <span className="text-gray-600 ml-2 text-sm">
//                             {rating_review_score} / {review.out_of || 5}
//                         </span>
//                     </div>
//                 </div>
//                 <div>
//                     <img
//                         src={source.icon}
//                         alt={source.name}
//                         className="w-10 h-10 rounded-full border-2 border-gray-200"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;
