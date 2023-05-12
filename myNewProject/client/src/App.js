import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import {Route, Routes} from "react-router-dom";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Main/>} path="/people/" />
            <Route element={<Detail/>} path="/people/:id" />
        </Routes>
    </div>
  );
}

export default App;
