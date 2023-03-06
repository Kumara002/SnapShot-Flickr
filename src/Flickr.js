import React from "react";
import {useEffect,useState} from "react";
import axios from "axios"
import { useContext} from "react";
import {UserContext} from "./CreateContext"
import "./Flickr.css"

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
        
            await axios.get(url).then((data) => {
                    // get an array of image-url
                      console.log(data)
                      const arr= data.data.photos.photo.map((photo,index) => {
                        // return setImageUrl([getFlickrImageURL(photo, 'q')])
                        // return (setImageUrl([...imageUrl,{url:getFlickrImageURL(photo, 'q')}]))
                    
                        return  (getFlickrImageURL(photo, 'q'))
                    })
                    setImageUrl(arr)
                })
                .catch(()=>{

                }).finally(()=>{

                })
                }
                imageUrl.map((url,key)=>{
                 
                   return console.log(url)
                })

    return(
        <div>
            <h1>{user} pictures</h1>
            <section>
            {imageUrl.map((url,key)=>{
                return(
                    <article className="article">
                        <img src={url} key={key}  alt="flickr" width="250" height="250"/>
                    </article>
                )
            })}
            </section>
        </div>
    )
}

export default Flickr;