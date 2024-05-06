import React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import './review-rating.sass';

const ReviewRating = () => {
    return (
        <div className='review-rating'>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating name="read-only" defaultValue={5} readOnly />
            </Box>
        </div>
    );
};

export default ReviewRating;