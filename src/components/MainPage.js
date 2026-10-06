import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li> */}
            <Link to='/employees'>
              <button class="main-button">Общая таблица</button>
            </Link>
          {/* </li> */}
          {/* <li>
            <Link to='/find'>сотрудник</Link>
          </li> */}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
};

export default MainPage;