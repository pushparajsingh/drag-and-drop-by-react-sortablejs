import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import GridItem from './GridItem';
import GridAddItem from './GridAddItem';

const Grid = () => {
  const [users, setUsers] = useState([]);

  // Fetching the data from typicode
  // and setting it to "users" state

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) =>
        setUsers((prev) => {
          return data.map((item) => ({
            id: item.id,
            name: item.title,
          }));
        })
      );
  }, []);

  // Drag and Drop Handler
  const onDragDropEnds = (oldIndex, newIndex) => {
    console.log('Drag and drop other tasks');
    console.log(oldIndex, newIndex);
  };

  return (
    <div className="border rounded-3 p-3 shadow">
      {/* {users.length === 0 ? (
        <GridAddItem />
      ) : ( */}
        <ReactSortable
          list={users}
          setList={(newlist) => setUsers(newlist)}
          ghostClass="dropArea"
          handle=".dragHandle"
          filter=".ignoreDrag"
          preventOnFilter={true}
          className="grid-container"
          onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
        >
          <>
            {users.map((user) => (
              <GridItem key={user.id} user={user} />
            ))}
            {/* <GridAddItem /> */}
          </>
        </ReactSortable>
      {/* )} */}
    </div>
  );
};

export default Grid;
