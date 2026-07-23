import { spawn } from 'child_process';
import * as React from 'react';

export interface IAppProps {
    title: string
    content: string
    commentsQty: number
    tags: string[] 
    //enum
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    PY = "Python"
}

export default function Destructuring ({title, content, commentsQty, tags, category} : IAppProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{commentsQty}</p>
      <p>{tags.map(tag => (
        <span>#{tag}</span>
      ))}</p>
      <h4>{category}</h4>
    </div>
  );
}
