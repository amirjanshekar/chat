import React, {PureComponent} from "react";

class Navbar extends PureComponent{

    render() {
        return (
            <div className='bg-blue-500 rounded-t w-full h-15'>
                <div className='float-left m-2'>
                    <h4 className='text-gray-300'>Amir janshekar</h4>
                    <p className='text-white text-left ml-2'>online</p>
                </div>

            </div>
        );
    }

}

export default Navbar