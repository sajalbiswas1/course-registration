import { FiBookOpen } from 'react-icons/fi';
const Card = () => {
    return (
        <div className="w-3/4 pb-5">

            <div className="w-1/3 bg-[#FFF] p-4 rounded-lg pb-6">
                <img className="" src="https://i.ibb.co/TDycKnZ/c-programing.png" alt="" />
                <p className="text-xl font-bold mt-4">Introduction to C Programming</p>
                <p className="text-base mt-3 text-zinc-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="flex gap-3 mt-4 text-xl justify-around items-center font-medium text-zinc-500">
                    <span className='text-3xl font-light'>$   </span>
                    <p>Price: 23500</p>
                    <p><FiBookOpen className='text-3xl ml-2'></FiBookOpen></p>
                    <p>Credit: 10 hr</p>
                </div>
                <button className="bg-sky-400 w-full text-white text-lg py-2 rounded-lg mt-5">Select</button>

            </div>

        </div>

    );
};

export default Card;