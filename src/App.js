// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar></Navbar>

          <Alert mesagge="Success"></Alert>

          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home></Home>}>  </Route>
              <Route exact path="/about" element={<About></About>}>  </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
