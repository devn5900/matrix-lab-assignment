import React, { useContext, useEffect, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import { fetchData } from '../../utils/api'
import {RxHamburgerMenu} from 'react-icons/rx'
import { TogglerContext } from '../context/TogglerProvider'
import Card from './Card'
const Main = ({title,url}) => {
    const [load,setLoad]= useState(false);
    const {toggle,setSidebar,sidebar}= useContext(TogglerContext);
    const [data,setData]= useState([]);
    const [search,setSearch]= useState("");
    useEffect(()=>{
        setLoad(true);
        fetchData(url)
        .then((res)=>{
            console.log(res.pairs)
            setData(res.pairs)
            setLoad(false);
        })
    },[toggle])

    const handleSearch=async()=>{
        if(search){
            fetchData(`https://api.dexscreener.com/latest/dex/search/?q=${search}`).then((res)=>{
                setData(res.pairs)
            })
        }
    }
  return (
    <div className='main'>
        <div className='mainNav'>
            <div>
                <span onClick={()=>setSidebar(true)} className='open'><RxHamburgerMenu/></span>
        <span className="logo">NFTify</span>
            </div>
            <div>
                <div>
                <input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
                <BiSearch className='searchIcon' onClick={handleSearch} />
                </div>
            </div>
            <div>
                <button  className='connectBtn'>Connect</button>
            </div>
        </div>
        <div className='result'>
            <h1 className='title'>{title} Search Result</h1>
            <div className='cardContainer'>
                {
                    data&&data.length>0&&data.map((el,i)=>{
                        return i<3?<Card key={i} {...el} />:null 
                    })
                }
                {
                    load&&<div style={{color:'white'}}>
                        Loading.....
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Main