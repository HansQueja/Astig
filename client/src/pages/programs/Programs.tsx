import React, { useState, useEffect } from 'react';
import "./Programs.css";

interface CourseData {
  Course: string;
  University: string;
  Department: string;
  ID: number;
}

interface PaginationData {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  next_page: number | null;
  previous_page: number | null;
}

interface ApiResponse {
  data: CourseData[];
  pagination: PaginationData;
}

function Programs() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(url: string): Promise<void> {
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

  useEffect(() => {
    fetchData('http://127.0.0.1:3000/api/dashboards');
  }, []);

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
    <div className="program-container">
      <h1>Programs and Universities</h1>
      <div className="program-table">
        <div className="program-row">
          <div className="program-row-header">Program</div>
          <div className="program-row-header">Institution</div>
          <div className="program-row-header">Department</div>
        </div>
          {apiData.data.map((course) => (
            <div className="program-row" key={course.ID}>
              <div className="program-content">{course.Course}</div>
              <div className="program-content">{course.University}</div>
              <div className="program-content">{course.Department}</div>
            </div>
          ))}
      </div>
      <div className="program-pagination">
        <p>
          Page {apiData.pagination.current_page} of {apiData.pagination.total_pages} (Total items: {apiData.pagination.total_items})
        </p>
        {apiData.pagination.previous_page && <button onClick={()=>{fetchData(`http://127.0.0.1:3000/api/dashboards?page=${apiData.pagination.previous_page}`)}}>Previous Page</button>}
        {apiData.pagination.next_page && <button onClick={()=>{fetchData(`http://127.0.0.1:3000/api/dashboards?page=${apiData.pagination.next_page}`)}}>Next Page</button>}
      </div>
    </div>
  );
}

export default Programs;