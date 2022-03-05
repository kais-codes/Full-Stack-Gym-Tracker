import './App.css';

//imports 
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//imports the pages
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage'
import CreateExercisePage from './pages/CreateExercisePage'

//imports components
import Navigation from './components/Navigation';


function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState()

  return (
    <div className='App'>
      <Router>
        <header>
          <h1>Personal Exercise Log</h1>
        </header>
        <Navigation />
        <main>
          <Route path='/' exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path='/edit-exercise'>
            <EditExercisePage exerciseToEdit={exerciseToEdit}/> 
          </Route>
          <Route path='/create-exercise'>
            <CreateExercisePage />
          </Route>
        </main>
      </Router>
      <footer>
        <p> &copy; Kyrne Li
        </p>
      </footer>
    </div>
  )
};

export default App;
