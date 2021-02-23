import React, {useEffect} from 'react'

const Questions = () => {
  useEffect(() => {
    document.body.id = 'bb1';
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        <li>Question 1</li>
        <li>Question 2</li>
        <li>Question 3</li>
        <li>Question 4</li>
        <li>Question 5</li>
      </ul>
      <div>
        <h3>Create new question</h3>
      </div>
    </div>
  )
}

export default Questions
