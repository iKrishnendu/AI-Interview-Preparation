import React, { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import { useNavigate } from 'react-router-dom'
import { div } from 'framer-motion/client'
import { LuUser } from 'react-icons/lu'

function ProfileInfoCard() {
    const { user, clearUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        clearUser()
        navigate("/")
    }
    return user && (
        <div className='flex items-center gap-2'>
            <div className='h-11 w-11 rounded-full overflow-hidden bg-orange-50 flex items-center justify-center'>
                <LuUser className='text-2xl text-orange-500' />
            </div>
            <div className='flex flex-col items-start gap-1'>
                <p className='text-[15px] font-bold leading-3'>{user.name || ""}</p>
                <button onClick={handleLogout} className='text-sm font-semibold text-amber-600 cursor-pointer hover:underline'>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfoCard