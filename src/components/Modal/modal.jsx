'use client'

import { useState } from "react"
import { IoCloseCircleSharp } from "react-icons/io5";
import AddButton from "@/components/Buttons/AddButton/addButton"
import Form from "@/components/Form/form"

export default function Modal() {
    const [isActive, setIsActive] = useState(false)

    function handleClose(e){
        if(e.target.id === "container"){
            setIsActive(false)
        }
    }

    return (

        <>
            {isActive ?
                <div
                id="container"
                onClick={handleClose}
                 className=" h-full w-full  bg-zinc-950 bg-opacity-80 backdrop-blur-sm fixed rounded-3xl flex flex-col justify-center items-center ">
                    <div className="w-11/12 bg-black h-[80%] rounded-3xl  max-w-lg flex flex-col justify-center items-center relative" >
                        <Form />
                        <button
                            onClick={() => setIsActive(false)}
                            className="absolute top-5"
                        >
                            <IoCloseCircleSharp size={72} />
                        </button>
                    </div>

                </div> :
                <div className="fixed bottom-1 right-5">
                    <AddButton onClick={() => setIsActive(true)} />
                </div>
            }
        </>


    )
}