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

    setElement((prev) => {
      return [
        ...prev,
        {
          type: 'pencil',
          offsetX,
          offsetY,
          path: [[offsetX, offsetY]],
          storke: 'black',
        },
      ]
    })

    setIsDrawing(true)
  }
  const mouseMoveHandler = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    if (isDrawing) {
      // if (element.length === 0) return
      const { path } = element[element.length - 1]
      const newpath = [...path, [offsetX, offsetY]]

      setElement((prev) => {
        return prev.map((ele, index) => {
          if (index === element.length - 1) {
            return {
              ...ele,
              path: newpath,
            }
          } else {
            return ele
          }
        })
      })
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
