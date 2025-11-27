import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const SearchRecords = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState('');

  const handleSearch = () => {
    if (searchParam.trim()) {
      setTimeout(() => {
        navigate(`/search_records/${searchParam.trim()}`);
        scrollTo(0, 0);
      }, 250);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-6">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Search Patient Records
          </h1>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="searchInput"
                className="mb-3 block text-sm font-semibold text-gray-700">
                Enter Patient ID, Name, or Phone Number
              </label>
              <input
                type="text"
                id="searchInput"
                value={searchParam}
                onChange={e => setSearchParam(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                placeholder="Search by ID, name, or phone..."
              />
            </div>

            <button
              onClick={handleSearch}
              disabled={!searchParam.trim()}
              className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:active:scale-100">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
