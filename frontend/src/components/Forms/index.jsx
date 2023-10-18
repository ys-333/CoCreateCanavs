import './index.css'
import JoinRoomForm from './JoinRoomForm'
import CreateRoomForm from './CreateRoomForm'
const Forms = () => {
  return (
    <div className="row h-100 pt-5">
      <div className="p-5 col-md-4 form-box border  border-primary rounded-2 mt-5 mx-auto  d-flex align-items-center flex-column">
        <h1 className="text-primary fw-bold">Create Room</h1>
        <CreateRoomForm />
      </div>
      <div className="p-5 col-md-4 form-box border  border-primary rounded-2 mt-5 mx-auto d-flex align-items-center flex-column">
        <h1 className="text-primary fw-bold">Join Room</h1>
        <JoinRoomForm />
      </div>
    </div>
  )
}

export default Forms
