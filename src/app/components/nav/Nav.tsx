import React from 'react';

import { IItem, ItemProps } from './items.decl';
import './Nav.css';
import './Selected.css';

export function Nav({ items }: ItemProps) {
  return (
      <div className="navbar">
          {
              items?.map((item: IItem) => <span
                  key={item.name}
                  id={item.name}
                  onClick={(e: any) => {
                  if (item.onClick) { item.onClick() }
                  if (item.onClickEvent) { item.onClickEvent(e) }
              }}>{item.name}</span>)
            }
      </div>
  );
}

