import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import Nav from './components/Nav'
import ProcedureDetails from './components/ProcedureDetails'

import './App.css';

function App() {
  const procedureList = [
    {
      name: 'Root Canal',
      id: 1,
      description: 'Very painful'
    },
    {
      name: 'Crown',
      id: 2,
      description: 'Significantly less painful'
    },
    {
      name: 'Cleaning',
      id: 3,
      description: 'Absolutely awful'
    },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Route path="/" exact component=
        {Home} />
        <Route path="/contact"  component=
        {Contact} />
        <Route 
          exact
          path="/procedures"  
          render={() => { return <Procedures
          procedureList={procedureList}/>
          }}
         /> 
         <Route 
            path="/procedures/:id" 
            render={(routeInfo) => {
              const id = routeInfo.match.params.id
              const targetProcedure = procedureList.find((p) => p.id === parseInt(id))
              return <ProcedureDetails procedure={targetProcedure} />
            }}
         />
      </div>
    </BrowserRouter>
  );
}

export default App;
