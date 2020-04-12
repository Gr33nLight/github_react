import React from 'react';
export const Repos = ({ repos }) => {
  if (repos && repos.length > 0) {
    return repos.map((item) => <div key={item.name}>{item.name}</div>);
  } else {
    return <div>No repos</div>;
  }
};

export default Repos;
