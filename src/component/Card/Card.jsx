import { FiBookOpen } from 'react-icons/fi';
import PropTypes from 'prop-types';
const Card = ({ cards, handelTitle}) => {
    const { image, title, description, credit, price } = cards;
    const titlePath = cards;
    // console.log(cards)
    return (
        <div className="">
            <div className=" bg-[#FFF] p-4 rounded-lg pb-6">
                <img className="" src={image} alt="" />
                <p className="text-xl font-bold mt-4">{title}</p>
                <p className="text-base mt-3 text-zinc-500">{description}</p>
                <div className="flex gap-1 mt-4 text-xl justify-around items-center font-medium ">
                    <span className='text-3xl font-light'>$   </span>
                    <p className='text-zinc-500'>Price: {price}</p>
                    <p><FiBookOpen className='text-2xl ml-2'></FiBookOpen></p>
                    <p className='text-zinc-500'>Credit: {credit} hr</p>
                </div>
                <button onClick={()=>handelTitle(titlePath)} className="bg-sky-400 w-full text-white text-lg py-2 rounded-lg mt-5">Select</button>

            </div>

        </div>

    );
};

Card.propTypes = {
    cards: PropTypes.array.isRequired,
    handelTitle: PropTypes.func.isRequired,
};
export default Card;