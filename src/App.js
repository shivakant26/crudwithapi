
import './App.css';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import PageNotFound from './Component/PageNotFound';
import { Container } from 'react-bootstrap';
import Registration from './Component/Registration';
import Dashboard from './Component/Dashboard';
import CreatePost from './Component/Posts/createPost';
import ShowPost from './Component/Posts/showPost';
import UpdatePost from './Component/Posts/updatePost';
import DeletePost from './Component/Posts/deletePost';

function App() {
  const token = localStorage.getItem("logintoken")
  return (
    <div className="App">
      <Router>
        {
          token ?
            <>
              <Routes>
                <Route path="/dashboard/" exact={true} element={<Dashboard />} >
                  <Route path="createPost" exact={true} element={<CreatePost />} />
                  <Route path="listPost" exact={true} element={<ShowPost />} />
                  <Route path="updatePost" exact={true} element={<UpdatePost />} />
                  <Route path="deletePost" exact={true} element={<DeletePost />} />
                </Route>
              </Routes>
            </>
            :
            <>
              <Header />
              <Container>
                <Routes>
                  <Route path="/" exact={true} element={<Home />} />
                  <Route path="/signin" exact={true} element={<Login />} />
                  <Route path="/signup" exact={true} element={<Registration />} />
                  <Route path="*" exact={true} element={<PageNotFound />} />
                </Routes>
              </Container>
            </>
        }
      </Router>
    </div>
  );
}

export default App;
