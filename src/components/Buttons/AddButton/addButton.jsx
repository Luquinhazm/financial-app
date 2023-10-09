import { IoMdAdd } from 'react-icons/io'

export default function AddButton({onClick}) {
    

    return (
        <div>
            <button onClick={onClick} className=' rounded-lg shadow-md'>
                <IoMdAdd className='text-green-400' size={58}></IoMdAdd>
            </button>
        </div>
    )
}