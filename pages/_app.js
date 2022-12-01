import Navbar from '../components/Navbar'
import Foot from '../components/Foot'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps}/>
      <Foot /> 
    </>
     )
}

export default MyApp
