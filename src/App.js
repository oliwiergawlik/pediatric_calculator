import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
