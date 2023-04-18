import React from 'react';

const GridItem = ({ user }) => {
  return (
    <div className="grid-items card shadow-sm rounded-3 overflow-hidden">
      <div className="card-body">
        <h3 className=" h5 card-title m-0">{user.name}</h3>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <span>{user.id}</span>
        <span className="btn btn-white border shadow-sm dragHandle">=</span>
      </div>
    </div>
  );
};

export default GridItem;
