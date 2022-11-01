import * as React from 'react';
import {Routes,Route } from 'react-router-dom'
const Welcome = React.lazy(() => import('./routes/Welcome'));
const Account = React.lazy(() => import('./routes/Account'));

const Loading = () => <p>Loading ...</p>;
const AppRouter = () => {
return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
    <Route path='/' element={<Welcome/>} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/account' element={<Account/>} />
    </Routes>
  </React.Suspense>
);
}
export default AppRouter;