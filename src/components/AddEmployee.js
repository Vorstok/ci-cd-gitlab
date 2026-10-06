import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './css/MainTable.css'

const AddEmployee = ({ props }) =>  {

    const [user, setUser] = useState({});

    const addEmployee = () => {
      const url = '/api/employee/create';
        
        fetch(url, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
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
                "isFired": user.isFired===null ? false : user.isFired
            })
        })
    };


    return( 
        // <PrimeReactProvider>

          <div>
            <table class="table">
              <tbody>
                <tr>
                  <th><label htmlFor='firstName'>Имя</label></th>
                  <th>
                    <input  
                      name='firstName'
                      placeholder='firstName' 
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
                      onChange={(e) => setUser({ ...user, patronymic: e.target.value})} 
                      /> 
                  </th>
                </tr>
                <tr>
                  <th><label htmlFor='incomingDate'>Дата начала работы</label></th>
                  <th>
                    <Calendar name='incomingDate' placeholder='incomingDate' class="Main-Calendar" 
                    onChange={(e) => setUser({ ...user, incomingDate: e.target.value} )} dateFormat="yy-mm-dd" />
                  </th>
                </tr>
                <tr>
                  <th><label htmlFor='birthDate'>Дата рождения</label></th>
                  <th>
                    <Calendar name='birthDate' placeholder='birthDate' class="Main-Calendar" 
                    onChange={(e) => setUser({ ...user, birthDate: e.target.value} )} dateFormat="yy-mm-dd" />
                  </th>
                </tr>
                <tr>
                  <th><label htmlFor='english'>Английский</label></th>
                  <th>
                    <input  
                      name='english'
                      placeholder='english' 
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
                      type="checkbox"
                      onChange={(e) => setUser({ ...user, isFired : e.target.checked} )}
                      /> 
                  </th>
                </tr>
              </tbody>
            </table>
          <div>
            <a onClick={addEmployee} href={'/employees'} class="main-button">Сохранить</a>
          </div>
          </div>
        // </PrimeReactProvider>
      )
}

export default AddEmployee;