import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)


// Runs on every render. At the beginning and every time state data is changed.
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res =>  {
        return res.json()
      }).then((data) => {
        console.log(data)
        setBlogs(data)
      })
  }, [])

  return ( 
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All the Bloggos from the Doggos!" /> }
    </div>
   );
}
 
export default Home;