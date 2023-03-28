import React from 'react'

const Movies = ({ movie }) => {
    return (
        <>
            <div className="max-w-sm mt-10 rounded overflow-hidden shadow-lg">
                <img className="w-full h-auto rounded-lg" src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt="" />
                <div className='px-6 py-4'>
                    <div className='font-medium text-xl mb-2 text-sky-500'>
                        {movie.Title}
                    </div>
                    <ul>
                        <li className='list-none text-gray-400'>
                            {movie.Year}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Movies