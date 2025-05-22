import { useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import { useParams } from "react-router-dom"
import { GetcategoryId } from "../ApiRequest/ApiRequest"
import HomeVidieo from "../Component/HomeVidieo"



const CategoryPage = () => {

   const[category,setCategory] = useState(null)
   const {category_id} = useParams()

 useEffect(() => {
  (async () => {
    const res = await GetcategoryId(category_id);
    setCategory(res);
  })();
}, [category_id]);


  return (
    <Layout>
        <HomeVidieo video={category}/>
    </Layout>
  )
}

export default CategoryPage