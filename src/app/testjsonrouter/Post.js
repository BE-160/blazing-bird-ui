import React from 'react';
import { Link } from 'redux-json-router';

export const Post = () => (
  <div>
    <h4>Welcome Post!</h4>
    
    <Link to='/'>Home</Link><br />
    <Link to='/docs'>Post</Link><br />
    <Link to='/docs/1'>Post child</Link><br />
    <Link to='/sdfsd'>Error</Link>
  </div>
);

export default Post;