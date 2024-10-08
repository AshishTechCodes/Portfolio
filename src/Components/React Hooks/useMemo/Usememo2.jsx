import React, { useState, useMemo } from 'react';

const Usememo2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Edward',
    'Fiona',
    'George'
  ];

  // Memoizing the filtered list
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user => user.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, users]); // Dependencies: searchTerm and users

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usememo2;