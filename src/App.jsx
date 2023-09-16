
import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card/Card'
import SideBar from './component/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [card, setCard] = useState([])
  const [title, setTitle] = useState([])
  const [remainingTime, setRemainingTime] = useState(20)
  const [hour, setHour] = useState(0)
  const [totalPrice, setTotalPrice]=useState(0)
  // console.log(title)

  useEffect(() => {
    fetch('card.json')
      .then(res => res.json())
      .then(data => setCard(data))
  }, []);

  const handelTitle = (titlePath) => {
    // console.log(titlePath)
    const removeDuplicate = title.find(item => item.id == titlePath.id);
    let count = titlePath.credit;
    let price = titlePath.price


    if (removeDuplicate) {
      return toast.warning('Already Select')
    }
    
      title.forEach(item => {
        count = count + item.credit;
        price = price + item.price
      })
      const RemainingHour = 20 - count;
    if(count >20){
      return toast.error('Not Enough Hour')
    }
    else{
      setHour(count)
      setTotalPrice(price)
      const newTitle = [...title, titlePath];
      setTitle(newTitle)
    }
      setRemainingTime(RemainingHour)
  };

  return (
    <>
      <div className='w-11/12 m-auto'>
        <h1 className='text-4xl font-bold pt-12 text-center'>Course Registration</h1>
        <div className='md:flex lg:flex justify-between gap-5 mt-7'>
          <div className='w-3/4 pb-5'>
            <div className='grid grid-cols-3 gap-5'>
              {
                card.map(cards => <Card
                  key={cards.id} cards={cards}
                  handelTitle={handelTitle}
                ></Card>)
              }
            </div>
          </div>
          <SideBar
            title={title}
            remainingTime={remainingTime}
            hour={hour}
            totalPrice={totalPrice}
          ></SideBar>
        </div>
      </div>
      
      <ToastContainer position='top-center'></ToastContainer>
      
    </>
  )
}

export default App
