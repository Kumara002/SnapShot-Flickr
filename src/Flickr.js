import React from "react";
// import axios from "axios";
import {useEffect} from "react";
// import { useContext} from "react";

function Flickr(){
    // const user=useContext(UserContext)
    const myapiKey="f6e39a951aa8da5511cb767be7136cd8";

    // console.log(user)

    const data={
      method: 'flickr.photos.search',
      api_key: myapiKey,
      text: "cat", // Search Text
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

    
    // const axiosUrl=()=>{
    //     axios.get(url)
    //     // .then((response) => {return response.json()})
    //     .then((data) => {
    //         // We will impliment something later...
    //         console.log(data)
    //     });
    // }

    let FlickrArr=[]

    const arr=[]

    useEffect(()=>{
        axiosflickr()
    })
    const getFlickrImageURL = (photo, size) => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
        if (size) {
            // Configure image size
            url += `_${size}`;
        }
        url += '.jpg';
        // FlickrArr.push(url)
        // console.log(FlickrArr);
        // FlickrArr.assign(url)
        console.log(url)
        return url
    };

    // const url = `https://api.flickr.com/services/rest/?${parameters}`;


    const axiosflickr=()=>{
        
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    // get an array of image-url
                    console.log(data)
                    console.log(data.photos)
                    data.photos.photo.map((photo,index) => {
                        // const a=getFlickrImageURL(photo, 'q');
                        // console.log(index)
                        // return getFlickrImageURL(photo, 'q');
                        // arr.push(a)
                        // // return arr
                        arr[index]=getFlickrImageURL(photo, 'q');
                        return arr
                        // arr[`{${index}}`]=getFlickrImageURL(photo, 'q');
                        // return (
                        //     <div>
                        //         <h1>hello kumara</h1>
                        //         <img src={a} alt="a"/>
                        //     </div>
                        // )
                    })
                })
        
    }

    // console.log(FlickrArr)
    // console.log(arr)
    
    // console.log(arr.0)
    // // console.log("hello kumara")

    // return(
    //     <div>
    //         <img src={"text"} alt="flickrArr"/>
    //     </div>
    // )
//  return (
//     <div>
//         { arr.map((value,index)=>{
//         console.log(value)
//         return (
//             <img src={value} alt={index}/> 
//         )
//     })}
//     </div>
//  )
// if(arr){
//     arr.map((value,index)=>{
//         console.log(value)
//         FlickrArr.push(index)
//         return (
//             <div>{value}</div>
//         )
//     })
// }
console.log(arr.length)
// async function mappie{
//      arr.map((value,index)=>{
//         console.log(value)
//         FlickrArr.push(index)
//         return true
//     })
// }

    // arr.map(async(value,index)=>{
    //     console.log(value)
    //     await FlickrArr.push(index)
    //     return 
    // })

    // arr.forEach(async (values)=>{
    //     await console.log(values)
    // })
    console.log(arr)
    console.log(arr[1])
    console.log(FlickrArr)
    return (
        <>
        </>
    )
}

export default Flickr;