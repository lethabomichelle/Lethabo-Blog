import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './componets/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogLayout from './componets/DetailsPage/postDetails';
import Write from './componets/AddPost';
import Footer from './componets/footer/footer';
import EditPage from './componets/editPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/write-blog" element={<Write />} />
          <Route path="/blog-layout/:id" element={<BlogLayout />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
