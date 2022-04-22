
import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Login from './Component/Login';
import PageNotFound from './Component/PageNotFound';
import { Container } from 'react-bootstrap';
import Registration from './Component/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />}/>
          <Route path="/signin" exact={true} element={<Login />}/>
          <Route path="/signup" exact={true} element={<Registration />}/>
          <Route path="*" exact={true} element={<PageNotFound />}/>
        </Routes>
      
        </Container>
        </Router>
    </div>
  );
}

export default App;
