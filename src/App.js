import './App.css';
import { Routes, Route, Link } from "react-router" //주소표시줄 경로에 따라서 실행될 컴포넌트 

const Contact = ()=>{
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact...</p>
    </div>
  );
}
const Tasks = ()=>{
  return (
    <div>
      <h2>Tasks</h2>
      <p>Tasks...</p>
    </div>
  );
}
const Home = ()=>{
  return (
    <div>
      <h2>🏡Home</h2>
      <p>Home...</p>
    </div>
  );
}
const App = ()=>{
  return (
    <div className="App">
      <h1>React Router DOM</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Tasks">Tasks</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Tasks" element={<Tasks/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
