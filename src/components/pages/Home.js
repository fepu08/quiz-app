import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { prefix } from '../../config';
import title from '../../img/title.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = () => {
  useEffect(() => {
    document.body.id = 'gb1';
    //eslint-disable-next-line
  }, []);

  return (
    <div className='menu flex-center-center-column'>
      <div id='title-img-container' className='d-none d-sm-block'>
        <img src={title} alt='I am Smarticus' />
      </div>
      <Link
        to={`${prefix}/name`}
        className='btn btn-primary btn-block btn-menu'
      >
        Start Quiz
      </Link>
      <Link
        to={`${prefix}/questions`}
        className='btn btn-secondary btn-block btn-menu'
      >
        Edit Questions
      </Link>
      <Link
        to={`${prefix}/leaderboard`}
        className='btn btn-danger btn-block btn-menu'
      >
        Leader Board
      </Link>
    </div>
  );
};

export default Home;
