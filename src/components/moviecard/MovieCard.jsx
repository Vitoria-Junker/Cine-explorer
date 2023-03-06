import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'

import './Moviecard.css'

const  imageUrl =  import.meta.env.VITE_IMG

const MovieCard = ({movie = true}) => {
    return (
        <div className='movie-card'>
            <Link to={`/movie/${movie.id}`}>
             <img src={imageUrl + movie.poster_path} alt={movie.title}/>
                </Link>
            <h2>{movie.title}</h2>
            <p>
              <FaStar /> {movie.vote_average}
            </p>
             
        </div>
    )
}

//{showLink && <Link to={`/movie/${movie.id}`}>
                
                //</Link>}

export default MovieCard 