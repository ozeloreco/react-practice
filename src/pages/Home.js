import React  from 'react';

export default function Home(){
    return<>
    <h1 className="text-center  m-5">React Projects</h1>
  <div className='projects d-flex flex-column align-items-center'>
    <a href="/todo-app"className="project">Todo App</a>
    <a href="/expense-tracker"className="project">Expense</a>
    <a href="/fake-store"className="project">Fake Store</a>
    <a href="/movie-website"className="project">Movie Website</a>
  </div>
    </>
}