import React from 'react';

export function Button({text}) {
    return (
        <div className="py-1 px-4 border-1 bg-sky-900 rounded-md hover:bg-indigo-900 hover:text-indigo-100">
            <button>{text}</button>
        </div>
    )
}