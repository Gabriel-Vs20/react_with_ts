import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
import State from './components/State';


const name: string = "Gabriel"
const age: number = 22
const trueOrFalse : boolean = true

const userGretting = (name: string): string =>{
  return `Olá, ${name}`
}

function App() {
  return (
      <>
      <div>
      <h1>React + TypeScript + {name} + {age} anos</h1>
    </div><div>
        {trueOrFalse && (
          <p>Teste</p>
        )}
      </div>
      <h3>{userGretting(name)}</h3>
      <FirstComponent />
      <SecondComponent name = "Gabriel"/>
      <Destructuring title = "HP" content = "Algum conteúdo" commentsQty = {12} tags = {["1", "2", "3"]}/>
      <State />
      </>
      
  );
}
export default App;
