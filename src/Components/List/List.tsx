import React from "react";

export interface ListProps {
  items: string[];
}

const List = ({ items = [] }: ListProps) => {
  return (
    <ul>
      {items.map((item, itemIndex) => {
        return <li key={itemIndex}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
