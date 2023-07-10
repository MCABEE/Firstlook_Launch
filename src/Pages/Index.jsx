import { Link } from 'react-router-dom'
import logo from '../Assets/firstlookLogo.png'

const Index = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#E9523D] to-[#E2B001] h-screen flex flex-col items-center justify-center">

                <div className='flex'>
                    <div>
                        <img src={logo} alt="" className='ml-auto mt-12 h-16 w-16' />
                        <p className='text-2xl text-white mt-2 text-end'>
                            FIRSTLOOK
                        </p>
                        <p className="w-96 text-right text-white mt-6">
                            A Social Network for Indians Globally, to find a life partner.
                        </p>
                    </div>
                    <div className="h-[230px]">
                        <hr className="border-l border-gray-300 h-full ml-16" />
                    </div>
                    <div>
                        <p className="ml-16 text-lg text-white mt-36">
                            We&nbsp;&nbsp;Are&nbsp;&nbsp;Almost
                        </p>
                        <p className="text-5xl ml-16 text-white">
                            Ready
                        </p>
                    </div>
                </div>
                <div className='flex w-3/12 mt-20 ml-32'>
                    <hr className="bg-[#E9523D] border border-[#E9523D] rounded-l-3xl h-2 w-2/3" />
                    <hr className="bg-[#D9D9D9] rounded-r-3xl h-2 w-1/3" />
                </div>
                <p className='text-[32px] mt-6 text-white ml-32 font-light'>
                    L A U N C H I N G&nbsp;&nbsp;&nbsp;S O O N
                </p>
                <p className='mt-7 text-[32px] ml-36 text-white font-light'>
                    JULY 2023
                </p>

                <Link to='/privacy/policy' className='text-white bottom-4 right-4 absolute ml-36 text-sm font-light'>
                    Privacy Policy
                </Link>

            </div>
        </>
    )
}

export default Index