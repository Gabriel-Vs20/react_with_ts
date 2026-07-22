import React, {useState, ChangeEvent} from 'react';

export default function State() {

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setText(e.target.value)
  }
  const[text, setText] = useState<string | null>(null);

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
