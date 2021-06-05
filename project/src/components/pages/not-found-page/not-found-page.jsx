import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo';

function NotFoundPage() {
  return (
    <div className="page page--gray">
      <Logo />
      <h1>404. Page Not Found</h1>
      <Link to="/">Go to the Main page</Link>
    </div>
  );
}

export default NotFoundPage;
