import React from 'react';

import { Card } from './Card'
import { ICards, CardProps } from './card.decl';

export function Cards({ cards }: ICards) {
    return (
        <div>
            {
                cards.map((card: CardProps) =>
                (<React.Fragment key={card.account_number}>
                    <Card props={card} />
                </React.Fragment>))
            }
        </div>
  );
}
