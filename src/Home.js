// imports hooks from react via node_modules, then gets the reusable bloglist component

import { useState, useEffect } from 'react'
import BlogList from './BlogList'

// Allows for specific reactions in the display based on 
// state values of different variables.

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

// Runs on every render. At the beginning and every time state data is changed.
// useEffect causes a firing of the code block every single time things are rendered.

// setTimeout with 1000ms on the second argument is there to allow loading to display
// otherwise it'd go through too quickly

// fetch is running a get request from the faux database hosted in the json file
// you can't use async I believe with useEffect, so you to use .then()

// The first .then gets for the received response to have a truthy value on .ok,
// If it doesn't it throws an error to catch which causes state changes in the above
// error constant, triggering the error to display on screen

// If the ok value was truthy in the response it just takes the response, converts to 
// json using json() then runs .then again and adjusts some of the states and uses the 
// data from the response as the blogs that it will display on the client page.


// Followed by that, catch is used in the cases that a response was received, but still had
// an error that message is used to adjust the state in the error constant, pending gets set to false,
// and no blogs display. 


  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
           if(!res.ok) {
            throw Error('could not fetch the data for that resource')
           }
          return res.json()
        })
        .then(data => {
          setBlogs(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
  }, 1000)
}, [])

// The return ( ) bit is what actually gets rendered to the screen

// There's a div called home, It checks to see if the error constant state is true,
// if it isn't it skips over, if it is it displays the error message

// isPending is set to true by default, and then to false once the fake rest API
// response is received successfully or unsuccessfully

// blogs does the same thing as error, it checks to make sure the blogs state value is 
// true which is dependent on a successful fetch request. If it's successful it 
// will run the bits of code from the BlogLists component, if not that component won't
// rendered at all.

  return ( 
    <div className="home">
      {error && <div>{ error }</div> }
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All the Bloggos from the Doggos!" /> }
    </div>
   );
}
 
export default Home;