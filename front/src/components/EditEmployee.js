import React, { useState, useEffect} from 'react';
import './css/MainTable.css'
import { useParams } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './css/MainTable.css'



const EditEmployee = ({ props }) =>  {

  const [user, setUser] = useState({});
  const {id} = useParams();
    useEffect(() => {
      const url = `/api/employee/find/${id}`
    
      fetch(url)
        .then(res => res.json())
        .then(({ data }) => {
          setUser(data[0] ?? {});
        })
    }, [id]);

    const updateUser = () => {
      let url = `/api/employee/update/1`

      fetch(url, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            "id": user.id,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "patronymic": user.patronymic,
            "incomingDate": user.incomingDate,
            "birthDate": user.birthDate,
            "english": user.english,
            "education": user.education,
            "personalEmail": user.personalEmail,
            "corpEmail": user.corpEmail,
            "phone": user.phone,
            "tg": user.tg,
            "isFired": user.isFired
        })
      })
    };


  return(
        <div>
          <table class="table">
            <tbody>
              <tr>
                <th><label htmlFor='firstName'>Имя</label></th>
                <th>
                  <input  
                    name='firstName'
                    placeholder='firstName' 
                    value = {user.firstName} 
                    onChange={(e) => {
                      setUser({ ...user, firstName: e.target.value});
                    }} 
                  /> 
                </th>
              </tr>
              <tr>
                <th><label htmlFor='lastName'>Фамилия</label></th>
                <th>
                  <input  
                    name='lastName'
                    placeholder='lastName' 
                    value = {user.lastName} 
                    onChange={(e) => setUser({ ...user, lastName:e.target.value} )}
                  />
                </th>
              </tr>
              <tr>
                <th><label htmlFor='patronymic'>Отчество</label></th>
                <th>
                  <input  
                    name='patronymic'
                    placeholder='patronymic' 
                    value = {user.patronymic} 
                    onChange={(e) => setUser({ ...user, patronymic: e.target.value})} 
                  /> 
                </th>
              </tr>
              <tr>
                <th><label htmlFor='incomingDate'>Дата начала работы</label></th>
                <th>
                    <Calendar 
                    name='incomingDate' 
                    placeholder={user.incomingDate} 
                    class="Main-Calendar" 
                    onChange={(e) => setUser({ ...user, incomingDate: e.target.value} )} 
                    dateFormat="yy-mm-dd" />
                </th>
              </tr>
              <tr>
                <th><label htmlFor='birthDate'>Дата рождения</label></th>
                <th>
                    <Calendar 
                    name='birthDate' 
                    placeholder={user.birthDate} 
                    class="Main-Calendar" 
                    onChange={(e) => setUser({ ...user, birthDate: e.target.value} )} 
                    dateFormat="yy-mm-dd" />
                  {/* <input  
                    name='birthDate'
                    placeholder='birthDate' 
                    value = {user.birthDate} 
                    onChange={(e) => setUser({ ...user, birthDate :e.target.value})}
                  />  */}
                </th>
              </tr>
              <tr>
                <th><label htmlFor='english'>Английский</label></th>
                <th>
                  <input  
                    name='english'
                    placeholder='english' 
                    value = {user.english} 
                    onChange={(e) => setUser({ ...user, english:e.target.value})} 
                  /> 
                </th>
              </tr>
              <tr>
                <th><label htmlFor='education'>Образование</label></th>
                <th>
                  <input  
                    name='education'
                    placeholder='education' 
                    value = {user.education} 
                    onChange={(e) => setUser({ ...user, education: e.target.value} )}
                  /> 
                </th>
              </tr>
              <tr>
                <th><label htmlFor='personalEmail'>Личная почта</label></th>
                <th>
                  <input  
                    name='personalEmail'
                    placeholder='personalEmail' 
                    value = {user.personalEmail} 
                    onChange={(e) => setUser({ ...user, personalEmail: e.target.value} )}
                  /> 
                </th>
              </tr>
              <tr>
                <th><label htmlFor='corpEmail'>Рабочая почта</label></th>
                <th>
                  <input  
                    name='corpEmail'
                    placeholder='corpEmail' 
                    value = {user.corpEmail} 
                    onChange={(e) => setUser({ ...user, corpEmail : e.target.value} )}
                  />
                </th>
              </tr>
              <tr>
                <th><label htmlFor='phone'>Телефон</label></th>
                <th>
                  <input  
                    name='phone'
                    placeholder='phone' 
                    value = {user.phone} 
                    onChange={(e) => setUser({ ...user, phone :e.target.value} )}
                  />
                </th>
              </tr>
              <tr>
                <th><label htmlFor='tg'>Телеграм</label></th>
                <th>
                  <input  
                    name='tg'
                    placeholder='tg' 
                    value = {user.tg} 
                    onChange={(e) => setUser({ ...user, tg : e.target.value} )}
                  />
                </th>
              </tr>
              <tr>
                <th><label htmlFor='isFired'>Уволен</label></th>
                <th>
                  <input  
                    name='isFired'
                    placeholder='isFired' 
                    value = {user.isFired} 
                    type="checkbox"
                    onChange={(e) => setUser({ ...user, isFired : e.target.checked} )}
                  /> 
                </th>
              </tr>
            </tbody>
          </table>
          <div>
            <a onClick={updateUser} href={'/employees'} class="main-button">Обновить</a>
          </div>
        </div>
  )

}

export default EditEmployee;