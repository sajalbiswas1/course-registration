
import PropTypes from 'prop-types';

const SideBar = ({title}) => {

    return (
        <div className="w-1/4">
            <div className="bg-[#FFF] p-5 rounded-lg pb-7">
                <h3 className="text-xl font-bold text-sky-500 mb-3">Credit Hour Remaining 7 hr</h3>
                <hr />
                <h3 className="text-2xl font-bold mt-3 mb-5">Course Name</h3>
                <ol>
                {
                    title.map((setTitle, idx)=><li key={idx}>{idx+1}. {setTitle.title}</li>)
                }
                </ol>
                <hr />
                <p className="mt-3 mb-3 text-base opacity-80 font-medium">Total Credit Hour : 13</p>
                <hr />
                <p className="mt-3 text-xl opacity-75 font-semibold">Total Price : 48000 USD</p>
            </div>
        </div>
    );
};


SideBar.propTypes = {
    title: PropTypes.array.isRequired,
};
export default SideBar;