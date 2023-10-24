import Forms from './components/Forms'
import RoomPage from './pages/Room'
import { Route, Routes, useParams } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App
