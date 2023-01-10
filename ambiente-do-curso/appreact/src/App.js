import React from 'react'
import Card from 'react-bootstrap/Card'

const App = () => {
  return (
    // <div className='card bg-dark text-white m-5' style={{maxWidth: '18rem'}}>
    //   <div className='card-header'>Notebook</div>
    //   <div className="card-body">
    //     <h5 className='card-title'>R$ 2.500</h5>
    //     <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque non esse odit, quaerat, placeat, dolorum qui debitis molestiae pariatur doloribus quibusdam. Nam consequuntur nulla vero harum dolores doloribus libero incidunt.</p>
    //   </div>
    // </div>

    <Card bg='dark' text='white' className='text-white m-5' style={{maxWidth:'18rem'}}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2.500</Card.Title>
        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem veritatis, ex alias quod minima ut, voluptatem aliquam repellat magni optio nesciunt voluptas est atque cumque cum excepturi consequuntur voluptate! </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default App