import React from 'react'

const Rating = ({ value, max = 5 }) => {
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;
    const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="rating">
            {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`} className='rating-star full'>★</span>
            ))}
            {hasHalfStar && <span>½</span>}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`} className='rating-star empty'>☆</span>
            ))}
        </div>
    );
}

export default Rating