import { useState, useRef } from 'react'

import './index.css'

import WhiteBoard from '../../components/Whiteboard'

const RoomPage = () => {
  const [tool, setTool] = useState('pencil')
  const [color, setColor] = useState('black')
  const [element, setElement] = useState([])

  const canvasRef = useRef(null)
  const ctxRef = useRef(null)

  return (
    <div className="row">
      <h1 className="text-center py-4">
        White Board Sharing App{' '}
        <span className="text-primary">[Uses Online: 0]</span>
      </h1>
      <div className="col-md-10 px-5 mt-4  mt-5 d-flex align-items-center justify-content-between ">
        <div className="d-flex col-md-2 justify-content-between gap-1">
          <div className="d-flex gap-1 align-items-center ">
            <label htmlFor="pencil">Pencil</label>
            <input
              type="radio"
              name="tool"
              value="pencil"
              checked={tool === 'pencil'}
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
              checked={tool === 'line'}
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
              checked={tool === 'rectangle'}
              onChange={(e) => {
                setTool(e.target.value)
              }}
              id="rectangle"
              className="mt-1"
            />
          </div>
        </div>
        <div className="col-md-2 mx-auto">
          <label htmlFor="color">Select color</label>
          <input
            type="color"
            name=""
            id="color"
            className="mt-1 ms-3"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="col-md-3 d-flex gap-2">
          <button className="btn btn-primary mt-1">Undo</button>
          <button className="btn btn-outline-primary mt-1">Redo</button>
        </div>
        <div className="col-md-3">
          <button className="btn btn-danger">Clear Canvas</button>
        </div>
      </div>
      <div className="col-md-10 border mt-4 canvas-box">
        <WhiteBoard
          canvasRef={canvasRef}
          ctxRef={ctxRef}
          element={element}
          setElement={setElement}
        />
      </div>
    </div>
  )
}

export default RoomPage
