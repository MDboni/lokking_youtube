import CetagoriNav from "./CetagoriNav"
import TopNav from "./TopNav"

const Layout = (props) => {
  return (
    <div>
        <TopNav/>
        <CetagoriNav/>

        {
            props.children
        }
    </div>
  )
}

export default Layout