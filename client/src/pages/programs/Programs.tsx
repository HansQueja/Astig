import React, { useState, useEffect, ChangeEvent } from 'react';
import "./Programs.css";

// Interface for a CourseData type
interface CourseData {
  Program: string;
  Institution: string;
  Department: string;
  ID: number;
}

// Interface for the API response that we receive from the backend
interface ApiResponse {
  data: CourseData[]; // an array of courses
}

function Programs() {
  // Typing for the course data when it comes to dynamic array referencing
  type CourseDataProperty = "Program" | "Institution";

  // States to store various data 
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [filterData, setFilterData] = useState<CourseData[]>([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilterValue] = useState<CourseDataProperty>("Program");
  const [searchTerm, setSearchTerm] = useState('');

  // Used to get the main list of data from the database
  async function fetchData(url: string): Promise<void> {
    // set loading and error values
    setLoading(true);
    setError(null);

    try {
      const headers = new Headers();
      headers.set('Content-Type', 'application/json');
      const requestOptions: RequestInit = {
        method: 'GET',
        headers: headers,
      };

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData: ApiResponse = await response.json();

      setApiData(jsonData);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  // Used to get the current selected filter
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value as "Program" | "Institution");
  };

  // Used to handle the change of values in the search bar
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  };

  // used to filter the results based on the filter and search values
  useEffect(() => {
    if (apiData) {
        const results:CourseData[] = apiData.data.filter(course => {
            const searchTermLower = searchTerm.toLowerCase();
            return course[filter].toLowerCase().includes(searchTermLower);
        });
        setFilterData(results);
    }
  }, [searchTerm, apiData, filter]);

  // Used to call the fetch function
  useEffect(() => {
    fetchData('http://127.0.0.1:3000/api/dashboards');
  }, []);

  // Return values depending on the status of the data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!apiData) {
    return <p>No data to display.</p>;
  }

  return (
    <div className="program-page">
      <div className="program-container">
        <div className="program-table-header">
          <h2>Programs and Universities</h2>
          <select className="search-filter" name="search-filter" id="search-filter" onChange={handleFilterChange}>
              <option value="Program">Program</option>
              <option value="Institution">Institution</option>
            </select>
          <input className="search-bar" type="text" placeholder="Search.." name="search-bar" onChange={handleSearch}/>
        </div>
        <div className="program-table">
          <div className="program-row">
            <div className="program-row-header">Program</div>
            <div className="program-row-header">Institution</div>
            <div className="program-row-header">Department</div>
          </div>
            {filterData && filterData.map((course) => (
              <div className="program-row" key={course.ID}>
                <div className="program-content">{course.Program}</div>
                <div className="program-content">{course.Institution}</div>
                <div className="program-content">{course.Department}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;