import React , {PureComponent} from "react";

class Footer extends PureComponent{

    render() {
        return (
            <div className='w-full'>
                <div className='flex row-auto'>
                    <input type="text" className='w-5/6 px-2 py-1  border-gray-400 border-2' placeholder='Enter The Text'/>
                    <button className='w-1/6 bg-blue-500 rounded h-10 text-white'>
                        Send
                    </button>
                </div>

            </div>
        );
    }

}

export default Footer