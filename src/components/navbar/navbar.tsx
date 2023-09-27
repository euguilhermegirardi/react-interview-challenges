import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import SecondOne from '../../pages/second-challenge/second';
import ThreeLogic from '../../pages/three-logic-challenge/threeLogic';
import AppRoutes from '../../routes/AppRoutes';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

type Route = {
  name: string;
  path: string;
  children: ReactElement;
}

const navBarRoutes: Route[] = [
  {
    name: 'three-logic',
    path: ApplicationRoutes.threeLogic,
    children: <ThreeLogic />
  },
  {
    name: 'second-one',
    path: ApplicationRoutes.secondOne,
    children: <SecondOne />
  }
];

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="navbar">
        {navBarRoutes.map((route: Route) => (
          <button
            key={route.name}
            onClick={() => navigate(route.path)}
            style={{ margin: '5px' }}
          >
            {route.children}
          </button>
        ))}
      </div>

      <AppRoutes />
    </div>
  )
};

export default NavBar;