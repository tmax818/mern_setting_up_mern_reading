import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import {Route, Routes} from "react-router-dom";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Main/>} path="/people/" />
            <Route element={<Detail/>} path="/people/:id" />
            <Route element={<Update/>} path="/people/:id/edit"/>
        </Routes>
    </div>
  );
}

export default App;
