'use client'
import { useState } from "react"
import AddButton from "@/components/Buttons/AddButton/addButton"

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
                    className=" h-full w-full bg-opacity-80 backdrop-blur-sm fixed top-0 flex flex-col justify-center items-center "
                >
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