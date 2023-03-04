import React from "react";
import {useEffect,useState} from "react";
// import axios from "axios"
import { useContext} from "react";
import {UserContext} from "./CreateContext"

function Flickr(){
    const user=useContext(UserContext)
    console.log(user)
    const myapiKey="f6e39a951aa8da5511cb767be7136cd8";
    const [imageUrl,setImageUrl]=useState([])
    
    const data={
      method: 'flickr.photos.search',
      api_key: myapiKey,
      text: user, // Search Text
      sort: 'interestingness-desc',
      per_page: 12,
      license: '4',
      extras: 'owner_name,license',
      format: 'json',
      nojsoncallback: 1,
    }
  
    const parameters = new URLSearchParams(data); //convert into respected search params
  
    const url = `https://api.flickr.com/services/rest/?${parameters}`;
    console.log("url:",url);

    useEffect(()=>{
        axiosflickr()
     
    },[user])
    const getFlickrImageURL = (photo, size) => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
        if (size) {
            // Configure image size
            url += `_${size}`;
        }
        url += '.jpg';
        return url
    };

    const axiosflickr=async()=>{
        
            await fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then(async(data) => {
                    // get an array of image-url
                 
                     await data.photos.photo.map(async(photo,index) => {
                        // return setImageUrl([getFlickrImageURL(photo, 'q')])
                        // return (setImageUrl([...imageUrl,{url:getFlickrImageURL(photo, 'q')}]))
                    
                        return  (setImageUrl([getFlickrImageURL(photo, 'q')]))
                    })
                })
                }
                imageUrl.map((url,key)=>{
                    console.log(key,url)
                })

    return(
        <div>
            <h1>{user} pictures</h1>
            <ul>
            {imageUrl.map((url,key)=>{
                return(
                    <li key={key}><img src={url} alt="flickr" width="500" height="500"/></li>
                )
            })}
            </ul>
        </div>
    )
}

export default Flickr;