import { useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import { GetVidieos } from "../ApiRequest/ApiRequest"
import HomeVidieo from "../Component/HomeVidieo"
import Loader from "../Skeleton/Loader"

const HomePage = () => {
    const [video,setVideo] = useState(null)

    useEffect(()=>{
        (async()=>{
           const res = await GetVidieos()
           setVideo(res.videos)
        })()
    },[])

  return (

    <Layout>
        {
            video===null ? <Loader/> :   <HomeVidieo video={video}/> 
        }
      
    </Layout>

  )
}

export default HomePage