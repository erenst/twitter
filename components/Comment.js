import React from 'react';

export default function Comment({ id,comment }) {
    return (
        <div>
            {id}--{comment.comment}
        </div>
    );
}
