import { Component } from 'react'
import Header from './Header'
import RowOfMovies from './RowOfMovies'

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <Header/>
                <RowOfMovies title='Star Wars'/>
                <RowOfMovies title='Harry Potter'/>
                <RowOfMovies title='The lord of the rings'/>
            </>
        );
    }
}
 
export default Home;