
import './App.css'
import Card from './component/Card/Card'
import SideBar from './component/SideBar/SideBar'

function App() {

  return (
    <>
      <div className='w-11/12 m-auto'>
      <h1 className='text-4xl font-bold pt-12 text-center'>Course Registration</h1>
      <div className='md:flex lg:flex justify-between'>
        <Card></Card>
        <SideBar></SideBar>
      </div>
      </div>
    </>
  )
}

export default App
