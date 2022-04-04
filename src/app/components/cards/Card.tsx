import React from 'react';

import { ICardProps } from './card.decl';

export function Card({ props }: ICardProps) {
  return (
    <div>
        <span>{props.name}</span>
        <p>{props.account_number}</p>
        <p>{props.balance}</p>
    </div>
  );
}
