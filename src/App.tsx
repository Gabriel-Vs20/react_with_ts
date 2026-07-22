import React from 'react';
import FirstComponent from './components/FirstComponent'

const name: string = "Gabriel"
const age: number = 22
const trueOrFalse : boolean = true

const userGretting = (name: string): string =>{
  return `Olá, ${name}`
}

function App() {
  return (
      <><div>
      <h1>React + TypeScript + {name} + {age} anos</h1>
    </div><div>
        {trueOrFalse && (
          <p>Teste</p>
        )}
      </div>
      <h3>{userGretting(name)}</h3>
      <>{FirstComponent()}</>
      </>
      
  );
}
export default App;
