import Posts from './components/Posts';
import Container from '@mui/material/Container';
import { Route, Routes } from "react-router-dom"
import Post from './components/Post';


function App() {
  return (
    <Container>
      <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      </div>
    </Container>
  );
}

export default App;
