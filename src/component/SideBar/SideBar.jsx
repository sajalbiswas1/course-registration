
import PropTypes from 'prop-types';

const SideBar = ({ title, remainingTime, hour, totalPrice }) => {

    return (
        <div className="w-1/4">
            <div className="bg-[#FFF] p-5 rounded-lg pb-7">
                <h3 className="text-xl font-bold text-sky-500 mb-3">Credit Hour Remaining {remainingTime} hr</h3>
                <hr />
                <h3 className="text-2xl font-bold mt-3 mb-5">Course Name</h3>
                <ol className='mb-5'>
                    {
                        title.map((setTitle, idx) => <li className='opacity-70 mb-2' key={idx}>{idx + 1}. {setTitle.title}</li>)
                    }
                </ol>
                <hr />
                <p className="mt-3 mb-3 text-base opacity-80 font-medium">Total Credit Hour : {hour}</p>
                <hr />
                <p className="mt-3 text-xl opacity-75 font-semibold">Total Price : {totalPrice} USD</p>
            </div>
        </div>
    );
};


SideBar.propTypes = {
    title: PropTypes.array.isRequired,
    remainingTime: PropTypes.number.isRequired,
    hour: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};
export default SideBar;