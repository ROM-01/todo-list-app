import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Oops! That page doesn’t exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;
