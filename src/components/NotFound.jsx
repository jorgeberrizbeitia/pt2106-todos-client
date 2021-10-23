import React from 'react'

function NotFound({ history }) {

  // const goHome = () => {
  //   history.push("/")
  // }

  return (
    <div>
      <h1>Not Found! Sorry</h1>
      {/* <button onClick={goHome} >Go Home!</button> */}
      {/* also another way before with an anonymous function */}
      <button onClick={() => history.push("/")} >Go Home!</button>
    </div>
  )
}

export default NotFound
