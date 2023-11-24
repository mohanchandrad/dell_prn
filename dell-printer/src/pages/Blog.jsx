import Blogs from "../component/Blogs"
import Contact from "../component/Contact"
import InnerBenar from "../component/InnerBenar"


const Blog = () => {

    const dis = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repellendus soluta corporis in fugiat sit qui voluptate dolore ipsum tenetur.'

    return(
        <>
            <InnerBenar title='Blog' dis={dis} />
            <Blogs />
            <Contact />
        </>
    )
}

export default Blog