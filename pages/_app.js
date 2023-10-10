import Navbar from '../components/Navbar'
import Foot from '../components/Foot'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
 
  return (
    <>
      <Component {...pageProps}/>
    </>
     )
}

export default MyApp
