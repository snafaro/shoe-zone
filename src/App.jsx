
import './App.css'
import Header from './Components/Header/Header'
import Shoe from './Components/Shoe/Shoe'
import Text from './Components/Text/Text'

function App() {

  return (
    <>
      <Header></Header>
      
      <div className='flex mt-28 justify-around items-center'>
        <Text></Text>
        <Shoe></Shoe>
      </div>

    </>
  )
}

export default App
