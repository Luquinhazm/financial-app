import { IoIosAddCircle } from 'react-icons/io'

export default function AddButton({onClick}) {
    

    return (
        <div>
            <button className=''>
                <IoIosAddCircle onClick={onClick} size={72}></IoIosAddCircle>
            </button>
        </div>
    )
}