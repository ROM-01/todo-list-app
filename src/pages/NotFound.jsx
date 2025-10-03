import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h3>Page Not Found</h3>
      <p>Oops! That page doesn’t exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;
