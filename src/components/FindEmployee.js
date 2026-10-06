import React, { useState, useEffect} from 'react';
import './css/MainTable.css'
import { useParams } from 'react-router-dom';

const FindEmployee = ({ props }) =>  {

  const [users, setUsers] = useState([]);
  const params = useParams();

    useEffect(() => {
      const url = `/api/employee/find/${params.id}`
    
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setUsers(res.data);
          console.log('users', res.data)
        })

    }, []);

        return (
            <div>
                <p>Сотрудники:</p>
                {
                    users.map((user) => (
                        <p key={user.id}>{user.corpEmail}</p>
                    ))
                }
                <a href="/employees">назад</a>
            </div>
        )
      // }
}

export default FindEmployee;