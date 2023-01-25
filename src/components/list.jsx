import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Item from './toDo';

export default function ItemList({
  title,
  link,
  items,
  type,
  message,
}) {
  return (
    <div className="list">
      <h2 className="tableHeader">{title}</h2>
      {items?.length
        ? (
          <ul>
            {items.map((item) => (
              <Item
                key={item.id}
                type={type}
                item={item}
              />
            ))}
          </ul>
        )
        : (
          <div className="listButtonC8R">
            <a className="button" href={link}>
              {message}
              {' '}
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        )}
    </div>
  );
}
