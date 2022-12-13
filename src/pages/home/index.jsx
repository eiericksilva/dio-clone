import { Link } from 'react-router-dom'
import Button from '../../components/button'
import React from 'react'
import Header from '../../components/header'

const Home = () => {
  return (
    <>
      <Header />
      <Button title='teste1'></Button>
      <Button title='teste1' variant='secondary' />
      <Link to='/login'>Go Login</Link>
    </>
   
  )
}

export default Home