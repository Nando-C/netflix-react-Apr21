import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

const ShowDetail = ({match}) => {
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        // console.log(Id)
        // let Id = match.params.movId
        const fetchDetails = async () => {
            const response = await fetch('http://www.omdbapi.com/?apikey=a0871843&i=' + match.params.movId)
            const details = await response.json()
            console.log(details)
            setSelectedMovie(details)
            return details
        }
        fetchDetails()
    }, [match.params.movId])

        return (  
            <>
            {selectedMovie === null
            ? <h2>Loading...</h2>
            : typeof selectedMovie === "undefined"
                ? <h2>404 - MOVIE NOT FOUND</h2>
                : (
                    <Row>
                        <Col md={4}>
                            <img src={selectedMovie.Poster} alt="pic" className='m-5'/>
                        </Col>
                        <Col md={8} className='p-4'>>
                            <h2 className='my-2'>Title: <br /> {selectedMovie.Title}</h2>
                            <h2 className='my-1'>Year:  {selectedMovie.Year}</h2>
                            <h2 className='my-1'>Rated: {selectedMovie.Rated}</h2>
                            <h2 className='my-1'>Released:  {selectedMovie.Released}</h2>
                            <h2 className='my-1'>Genre: <br /> {selectedMovie.Genre}</h2>
                            <h2 className='my-1'>Director: <br /> {selectedMovie.Director}</h2>
                            <h2 className='my-1'>Writer: <br /> {selectedMovie.Writer}</h2>
                            <h2 className='my-1'>Actors: <br /> {selectedMovie.Actors}</h2>
                            <h2 className='my-1'>Plot: <br /> {selectedMovie.Plot}</h2>
                        </Col>
                    </Row>
                ) }
            </>
        );
    
}
 
export default ShowDetail;