import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Dashboard.css'

function Dashboard() {
    const [data, setData] = useState({});
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getData = async (page = 1) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:3000/api/dashboards?page=${page}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const result = await response.json();

                console.log(result);
                setData(result);
                setCourses(result["data"]);
                setTotalPages(result.pagination.total_pages || 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const listItems = courses.map(course =>
        <div key={course.ID}>
            <hr/>
            <div className="entry-container">
                <div className="course-name">{course.Course}</div>
                <p>{course.University}</p>
                <p>{course.Department}</p>
            </div>
        </div>
    )

    useEffect(() => {
        getData(currentPage);
    }, [currentPage])

    return (
        <div className="dashboard-pg">
            <Sidebar />
            <div className="dashboard-container">
                <div className="table">
                    <div className="table-header">
                        <p>Program</p>
                        <p>Institution</p>
                        <p>Department</p>
                    </div>
                    {listItems}
                </div>
                <div className="pagination">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span> Page {currentPage} of {totalPages} </span>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
  
}

export default Dashboard
