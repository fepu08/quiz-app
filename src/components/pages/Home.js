import React from 'react';
import {Link} from 'react-router-dom';
import { prefix } from '../../config';

const Home = () => {
  return (
    <div>
      <div className='menu d-flex flex-column justify-content-center align-items-center'>
            <Link to={`${prefix}/quiz`} className='btn btn-primary btn-block btn-menu'>
              Start Quiz
            </Link>
            <Link to={`${prefix}/questions`} className='btn btn-primary btn-block btn-menu'>
              Edit Questions
            </Link>
            <Link to={`${prefix}/leaderboard`} className='btn btn-primary btn-block btn-menu'>
              Leader Board
            </Link>
          </div>
    </div>
  )
}

export default Home
