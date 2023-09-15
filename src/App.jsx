
import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card/Card'
import SideBar from './component/SideBar/SideBar'

function App() {
  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('card.json')
      .then(res => res.json())
      .then(data => setCard(data))
  }, [])

const handelTitle = () =>{
  console.log('Click tigger me')
}

  return (
    <>
      <div className='w-11/12 m-auto'>
        <h1 className='text-4xl font-bold pt-12 text-center'>Course Registration</h1>
        <div className='md:flex lg:flex justify-between gap-5 mt-7'>
          <div className='w-3/4 pb-5'>
            <div className='grid grid-cols-3 gap-5'>
              {
                card.map(cards => <Card key={cards.id} cards={cards}></Card>)
              }
            </div>
          </div>
          <SideBar handelTitle={handelTitle}></SideBar>
        </div>
      </div>
    </>
  )
}

export default App
