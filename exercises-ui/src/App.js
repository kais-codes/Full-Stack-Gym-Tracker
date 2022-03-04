import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//imports the pages
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage'
import CreateExercisePage from './pages/CreateExercisePage'


function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          Placeholder title for
        </header>
        <main>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/edit-exercise'>
            <EditExercisePage /> 
          </Route>
          <Route path='/create-exercise'>
            <CreateExercisePage />
          </Route>
        </main>
      </Router>
    </div>
  )
};

export default App;
