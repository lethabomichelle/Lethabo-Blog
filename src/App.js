import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './componets/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogLayout from './componets/DetailsPage/postDetails';
import Write from './componets/AddPost';
import Footer from './componets/footer/footer';
import EditPage from './componets/editPage';
// import SignUp from './componets/logIn/SignUp';
import Login from './componets/logIn/Login';
import CommentSection from './componets/DetailsPage/comments';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/comments" element={<CommentSection />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/write-blog" element={<Write />} />
          <Route path="/blog/:Post_Id" element={<BlogLayout />} />
          <Route path='/edit/:Post_Id' element={<EditPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
