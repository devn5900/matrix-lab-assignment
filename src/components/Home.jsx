import React, { useContext } from 'react'
import Nav from './LeftSection/Nav'
import Main from './RightSection/Main'
import '../styles/Main.css'
import { TogglerContext } from './context/TogglerProvider'
import { fetchData, pairUrl, tokenUrl } from '../utils/api'
const Home = () => {
  const {toggle}= useContext(TogglerContext);
  return (
    <div className='container'>
        <Nav/>
        {
          toggle?
          <Main title={"Token"}  url={tokenUrl} />
          :
          <Main title={"Pair"}  url={tokenUrl} />
        }
    </div>
  )
}

export default Home