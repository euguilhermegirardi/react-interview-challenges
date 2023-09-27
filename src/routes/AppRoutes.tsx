import { Route, Routes } from 'react-router-dom';
import SecondOne from '../pages/second-challenge/second';
import ThreeLogic from '../pages/three-logic-challenge/threeLogic';
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
    </Routes>
  )
};

export default AppRoutes;