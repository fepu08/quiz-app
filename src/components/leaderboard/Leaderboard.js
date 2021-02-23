import React, {useEffect} from 'react'

const Leaderboard = () => {
  useEffect(() => {
    document.body.id = 'bb1';
    //eslint-disable-next-line
  }, []);
  
  return (
    <div>
      <h1>Leader Board</h1>
    </div>
  )
}

export default Leaderboard
