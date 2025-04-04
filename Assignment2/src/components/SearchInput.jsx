import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="m-4 mb-6">
      {/* Input field for search, with a placeholder 'Search users...' */}
      <input
        type="text"
        placeholder="Search users..."
        className="w-60 px-2 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3251D0] placeholder-gray-500" 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default SearchInput;
