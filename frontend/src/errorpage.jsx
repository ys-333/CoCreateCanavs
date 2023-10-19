import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>Oops!</h1>
      <p>sorry an unexpected error has occur</p>
      <i>{error.message || error.message}</i>
    </div>
  )
}

export default ErrorPage
