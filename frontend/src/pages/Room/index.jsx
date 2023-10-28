import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

const RoomPage = () => {
  const [tool, setTool] = useState('pencil')
  const [color, setColor] = useState('black')

  console.log('hello world');

  return (
    <div className="row">
      <h1 className="text-center py-5">White Board Sharing App</h1>
      <div className="col-md-8 px-5 mt-4  mt-5 d-flex align-items-center justify-content-between ">
        <div className="d-flex col-md-2 justify-content-between gap-1">
          <div className="d-flex gap-1 align-items-center ">
            <label htmlFor="pencil">Pencil</label>
            <input
              type="radio"
              name="tool"
              value="pencil"
              onChange={(e) => {
                setTool(e.target.value)
              }}
              id="pencil"
              className="mt-1"
            />
          </div>
          <div className="d-flex gap-1 align-items-center ">
            <label htmlFor="line">Line</label>
            <input
              type="radio"
              name="tool"
              value="line"
              onChange={(e) => {
                setTool(e.target.value)
              }}
              id="line"
              className="mt-1"
            />
          </div>
          <div className="d-flex gap-1 align-items-center ">
            <label htmlFor="rectangle">Rectangle</label>
            <input
              type="radio"
              name="tool"
              value="rectangle"
              onChange={(e) => {
                setTool(e.target.value)
              }}
              id="rectangle"
              className="mt-1"
            />
          </div>
        </div>
        <div className="col-md-7">
          <label htmlFor="color">Select color</label>
          <input
            type="color"
            name=""
            id="color"
            className="mt-1"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default RoomPage
