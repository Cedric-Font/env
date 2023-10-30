import './App.css'
import Display from './component/Display'




  
function App() {
  const name = import.meta.env.VITE_MY_NAME
  const city = import.meta.env.VITE_MY_CITY
  const language = import.meta.env.VITE_MY_LANGUAGE
  

  return (
    <>
     <p>I am {name}, wilder in {city}, and I love {language}.</p>
    </>
  )
}

export default App
