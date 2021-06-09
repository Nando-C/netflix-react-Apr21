// import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Component/Navbar';
import Home from './Component/Home'
import ShowDetail from './Component/ShowDetail'
// import Header from './Component/Header';
// import RowOfMovies from './Component/RowOfMovies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <CustomNavbar/>
      <Switch>
          <Route path="/ShowDetail/:movId" component={ShowDetail}/>
            {/* <ShowDetail /> */}
          {/* </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* <Header/>
      <RowOfMovies title='Star Wars'/>
      <RowOfMovies title='Harry Potter'/>
      <RowOfMovies title='The lord of the rings'/> */}
    </Router>
    </>
  );
}

export default App;
