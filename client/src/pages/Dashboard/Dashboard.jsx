import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Dashboard.css'

function Dashboard() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(
                'http://127.0.0.1:3000/api/dashboards',
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
            }
        } catch (error) {
            console.log(error);
        }
    }
    const listItems = data.map(course =>
        <li key={course.ID}>
            {course.Course}
        </li>
    )

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Sidebar />
            <div className="dashboard-container">
                {listItems}
            </div>
        </div>
    );
  
}

export default Dashboard
