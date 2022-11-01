import * as React from 'react';
import {Routes,Route } from 'react-router-dom'
const Welcome = React.lazy(() => import('./routes/Welcome'));
const Dashboard = React.lazy(() => import('./routes/Dashboard'));

const Loading = () => <p>Loading ...</p>;
const AppRouter = () => {
return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
    <Route path='/' element={<Welcome/>} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/account' element={<Dashboard/>} />
    </Routes>
  </React.Suspense>
);
}
export default AppRouter;