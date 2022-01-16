import React from 'react';

const Book = (props) => {
    const  { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <h4>{author}</h4>
        </article>
    )
    
};

export default Book;
