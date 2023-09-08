import axios from 'axios'

export const fetchData=async(url,params={})=>{
    try {
        const res= await axios.get(url,{
            params
        })
        return res.data
    } catch (error) {
        
    }
}

export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

export const tokenUrl=`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`;

export const pairUrl=''