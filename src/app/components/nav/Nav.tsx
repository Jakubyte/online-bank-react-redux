import React from 'react';

import { IItem, ItemProps } from './items.decl';

export function Nav({ items }: ItemProps) {
  return (
      <div className="nav-bar">
          <ul>
              {
                  items?.map((item: IItem) => <li key={item.name} onClick={(e: any) => {
                      if (item.onClick) { item.onClick() }
                      if (item.onClickEvent) { item.onClickEvent(e) }
                  }}>{item.name}</li>)
              }
          </ul>
      </div>
  );
}

