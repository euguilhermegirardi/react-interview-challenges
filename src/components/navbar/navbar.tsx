import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
import ThreeLogic from '../../challenges/1-three-logic/threeLogic'
import SecondOne from '../../challenges/2-sum-of-two-numbers/sum-of-two-numbers'
import Navbar from '../../challenges/3-navbar/navbar'
import ToggleAModal from '../../challenges/4-toggle-a-modal/toggle'
import AppRoutes from '../../routes/AppRoutes'
import ApplicationRoutes from '../../utils/navigation/applicationRoutes'
import { MemoryCard } from '../../challenges/5-memory-card'

type Route = {
  name: string
  path: string
  children: ReactElement
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
  },
  {
    name: 'navbar',
    path: ApplicationRoutes.navbar,
    children: <Navbar />
  },
  {
    name: 'toggle',
    path: ApplicationRoutes.toggle,
    children: <ToggleAModal />
  },
  {
    name: 'memory-card',
    path: ApplicationRoutes.memoryCard,
    children: <MemoryCard />
  },
]

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className="content">
      <div className="navbar">
        {navBarRoutes.map((route: Route) => (
          <button
            key={route.name}
            onClick={() => navigate(route.path)}
            style={{ margin: '5px' }}
          >
            {route.name}
          </button>
        ))}
      </div>

      <AppRoutes />
    </div>
  )
}

export default NavBar