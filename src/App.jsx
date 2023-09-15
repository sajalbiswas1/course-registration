
import './App.css'
import Card from './component/Card/Card'
import SideBar from './component/SideBar/SideBar'

function App() {

  return (
    <>
      <div className=''>
      <h1 className='text-4xl font-bold mt-12 text-center'>Course Registration</h1>
      <div className='md:flex lg:flex justify-between w-11/12 m-auto'>
        <Card></Card>
        <SideBar></SideBar>
      </div>
      </div>
    </>
  )
}

export default App
