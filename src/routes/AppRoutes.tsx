import { Route, Routes } from 'react-router-dom'
import ThreeLogic from '../challenges/1-three-logic/threeLogic'
import SecondOne from '../challenges/2-sum-of-two-numbers/sum-of-two-numbers'
import Navbar from '../challenges/3-navbar/navbar'
import ToggleAModal from '../challenges/4-toggle-a-modal/toggle'
import ApplicationRoutes from '../utils/navigation/applicationRoutes'
import { MemoryCard } from '../challenges/5-memory-card'
import { WackAMole } from '../challenges/6-wack-a-mole'

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

      <Route
        path={ApplicationRoutes.toggle}
        element={<ToggleAModal />}
      />

      <Route
        path={ApplicationRoutes.memoryCard}
        element={<MemoryCard />}
      />

      <Route
        path={ApplicationRoutes.wackAMole}
        element={<WackAMole />}
      />
    </Routes>
  )
}

export default AppRoutes