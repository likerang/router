import './App.css';
import { Routes, Route, NavLink, useParams} from "react-router" //주소표시줄 경로에 따라서 실행될 컴포넌트 

const contents = [
  {id:1, title:'기획', desc:'웹 기획 !'},
  {id:2, title:'디자인', desc:'웹 디자인 !'},
  {id:3, title:'구현', desc:'웹 구현 !'},
  {id:4, title:'취업', desc:'웹 분야 취업 !!!!!!!!!!!!!!!'}
]

const Contact = ()=>{
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact...</p>
    </div>
  );
}
const Task = ()=>{
  let params = useParams();
  console.log(typeof(params.task_id));
  let data = contents.find(c=>c.id === Number(params.task_id));
  console.log(data);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  );
}
const Tasks = ()=>{
  let list = [];
  contents.forEach(c=>{
    list.push(
    <li key={c.id}><NavLink to={`/Tasks/${c.id}`}>{c.title}</NavLink></li>
  )
  })
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {list}
      </ul>
      <Routes>
        <Route path=":task_id" element={<Task/>}/>
      </Routes>
      
    </div>
  );
}
const Home = ()=>{
  return (
    <div>
      <h2>🏡Home</h2>
      <p>My Sweet Home...</p>
      <img src="/lisbon.jpg"/>
    </div>
  );
}
const App = ()=>{
  return (
    <div className="App">
      <h1>React Router DOM</h1>
      <nav>
        <ul>
          <li><NavLink  to="/">Home</NavLink></li>
          <li><NavLink  to="/Tasks">Tasks</NavLink></li>
          <li><NavLink  to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Tasks/*" element={<Tasks/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
