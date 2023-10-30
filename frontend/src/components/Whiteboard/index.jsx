import { useState, useEffect } from 'react'
import rough from 'roughjs'

const roughGenerator = rough.generator()

const WhiteBoard = ({ canvasRef, ctxRef, element, setElement }) => {
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctxRef.current = ctx
  }, [])

  const mouseDownHandler = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    setElement((prev) => [
      ...prev,
      {
        type: 'pencil',
        offsetX,
        offsetY,
        path: [[offsetX, offsetY]],
        storke: 'black',
      },
    ])

    setIsDrawing(true)
  }
  const mouseMoveHandler = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    if (isDrawing) {
      const { path } = element[element.length - 1]
      const newpath = [...path, [offsetX, offsetY]]
      // setElement((prev))
    }
  }
  const mouseUpHandler = (e) => {
    setIsDrawing(false)
  }

  return (
    <>
      {JSON.stringify(element)}
      <canvas
        ref={canvasRef}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
        className="border board-dark border-3 h-100 w-100"
      ></canvas>
    </>
  )
}

export default WhiteBoard
