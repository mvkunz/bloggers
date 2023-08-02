// import React from 'react';
import { UserType } from '../types';
import { Link } from 'react-router-dom';

type Props = {
  userData: UserType,
};

export default function User({ userData }: Props) {
  return (
    <div>
      <p>
        {userData.firstName}
        {' '}
        {userData.lastName}
      </p>
      <Link to={ `posts/${userData.id}`}>Posts</Link>

      <img src={ userData.image } alt={ `${userData.firstName} ${userData.lastName}` } />
    </div>
  );
}
