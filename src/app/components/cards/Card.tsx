import React from 'react';

import { ICardProps } from './card.decl';
import './Card.css';
export function Card({ props }: ICardProps) {
  return (
    <div className="card">
      <span className="card-header">{props.name}</span>
      <div className="card-content">
        {
          props.content.map((content) => <span key={content.name}>{content.content}</span>)
        }
      </div>
      <div className="card-footer">
        {
          props.footer.map((content) => <span key={content.name}>{content.content}</span>)
        }
      </div>
    </div>
  );
}
