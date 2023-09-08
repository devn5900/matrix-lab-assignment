import React, { useContext, useEffect, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import { fetchData } from '../../utils/api'
import { TogglerContext } from '../context/TogglerProvider'
import Card from './Card'
const Main = ({title,url}) => {
    const [load,setLoad]= useState(false);
    const {toggle}= useContext(TogglerContext);
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
                        return i<12?<Card key={i} {...el} />:null 
                    })
                }
                {
                    load&&<div>
                        Loading.....
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Main