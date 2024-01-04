const Home = () => {

  const handleClick = (e) => {
    console.log('greetings, fellow doggos', e)
  }

  const handleClickAgain = (name) => {
    console.log('Hello, ' + name)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain('Gucci Doug')}>Click me again</button>
    </div>
   );
}
 
export default Home;