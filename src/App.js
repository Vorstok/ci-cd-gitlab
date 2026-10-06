import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainTable from './components/MainTable';
import AddEmployee from './components/AddEmployee';
import MainPage from './components/MainPage';
import { createContext } from 'react';
import EditEmployee from './components/EditEmployee';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'employees',
        element: <MainTable />
      },
      {
        path: 'update/:id',
        element: <EditEmployee />
      },
      {
        path: 'create',
        element: <AddEmployee />
      }
    ]
  }
])
const App = () => {

  return (

    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} >
    //         <Route index element={<div>No page is selected.</div> } />
    //         <Route path="employees" element={<MainTable />} />
    //         <Route path="find/:id" element={<FindEmployee />} />
    //       </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;