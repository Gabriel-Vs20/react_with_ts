import { spawn } from 'child_process';
import * as React from 'react';

export interface IAppProps {
    title: string
    content: string
    commentsQty: number
    tags: string[]  
}

export default function Destructuring ({title, content, commentsQty, tags} : IAppProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{commentsQty}</p>
      <p>{tags.map(tag => (
        <span>#{tag}</span>
      ))}</p>
    </div>
  );
}
