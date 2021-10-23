import React from 'react'

function ServerError({history}) {
  return (
    <div>
      <h1>Opps, sorry. Our backend developers screwed up</h1>
      <button onClick={() => history.goBack()} >Go Back!</button>
    </div>
  )
}

export default ServerError
