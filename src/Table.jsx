import React from 'react';

const Table = ({data}) => {
  return (
    <table className='table'>
      <caption><h2>Ures Information</h2></caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
            <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

export default Table;
