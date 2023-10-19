'use client'
import { useState } from "react"
import AddButton from "@/components/Buttons/AddButton/addButton"
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Modal({ component, postion }) {
    const [isActive, setIsActive] = useState(false)

    function handleClose(e) {
        if (e.target.id === "container") {
            setIsActive(false)
        }
    }

    return (
        <>
            {isActive ?
                <div
                    id="container"
                    onClick={handleClose}
                    className=" h-full w-screen bg-opacity-80 backdrop-blur-sm absolute top-0 flex flex-col justify-center items-center right-0 z-10"
                >
                    <button onClick={() => setIsActive(false)} className="absolute top-5">
                        <IoCloseCircleSharp size={72} />
                    </button>
                    {component}
                    
                </div>
                :
                <div className={`${postion}`}>
                    <AddButton onClick={() => setIsActive(true)} />
                </div>
            }
        </>
    )
}