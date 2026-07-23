import React, {createContext} from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
import State from './components/State';
import { Category } from './components/Destructuring';
import {Context} from './components/Context';



const name: string = "Gabriel"
const age: number = 22
const trueOrFalse : boolean = true

interface IAppContext{
  language: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);


const userGretting = (name: string): string =>{
  return `Olá, ${name}`
}
//types
type textOrNull = string | null
const text :textOrNull = 'A'

//context
const constextValue :IAppContext = {
  language: "TypeScript",
  projects: 1
};


function App() {
  return (
      <AppContext.Provider value={constextValue}>
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
      <Destructuring title = "HP" content = "Algum conteúdo" commentsQty = {12} tags = {["1", "2", "3"]} category = {Category.JS}/>
      <State />
      <Context />
      </AppContext.Provider>
      
  );
}
export default App;
