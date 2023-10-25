import { Route, Routes } from 'react-router-dom';
import ThreeLogic from '../challenges/1-three-logic/threeLogic';
import SecondOne from '../challenges/2-sum-of-two-numbers/sum-of-two-numbers';
import Navbar from '../challenges/3-navbar/navbar';
import ApplicationRoutes from '../utils/navigation/applicationRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ApplicationRoutes.threeLogic}
        element={<ThreeLogic />}
      />

      <Route
        path={ApplicationRoutes.secondOne}
        element={<SecondOne />}
      />

      <Route
        path={ApplicationRoutes.navbar}
        element={<Navbar />}
      />
    </Routes>
  )
};

export default AppRoutes;