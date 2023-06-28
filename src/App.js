import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TodoApp from './pages/Todoapp';
import ExpenseTracker from './pages/ExpenseTracker';
import FakeStore from './pages/FakeStore';
import MovieWebsite from './pages/MovieWebsite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React  from 'react';
import "./App.css";
function App() {
  return <BrowserRouter>
<a href="/" className='btn btn-danger m-3'><i class="fa fa-home" aria-hidden="true"></i></a>

  <Routes>
    <Route path='/'element= {<Home></Home>}/>
    <Route path='/todo-app'element= {<TodoApp></TodoApp>}/>
    <Route path='/expense-tracker'element= {<ExpenseTracker></ExpenseTracker>}/>
    <Route path='/fake-store'element= {<FakeStore></FakeStore>}/>
    <Route path='/movie-website'element= {<MovieWebsite></MovieWebsite>}/>





  </Routes>
  
  
  </BrowserRouter>
  
    
}

export default App;
