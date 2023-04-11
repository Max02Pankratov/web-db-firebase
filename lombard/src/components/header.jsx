import {Link} from 'react-router-dom'



export const Header = () => {


    return ( 
        <div className=' flex justify-evenly mt-5'>
            <Link className='p-3 bg-slate-500 text-[white] rounded-lg hover:bg-slate-600' to='/'>Авторизация</Link>
            <Link className='p-3 bg-slate-500 text-[white] rounded-lg hover:bg-slate-600' to='/card'>Список карточек</Link>
        </div>
    )
}