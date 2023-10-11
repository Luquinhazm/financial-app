'use client'
import { useState } from "react"
import { IoCloseCircleSharp } from "react-icons/io5";
import AddButton from "@/components/Buttons/AddButton/addButton"
import Form from "@/components/Form/form"
import MessageSucess from "../MessageSucess/messageSucess"

export default function Modal() {
    const [isActive, setIsActive] = useState(false)
    const [sucess, setSucess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSucess(true)
        setTimeout(() => { setSucess(false) }, 5000)
    }

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
                    className=" h-full w-full bg-opacity-80 backdrop-blur-sm fixed top-0 flex flex-col justify-center items-center ">
                    <div className="w-11/12 bg-slate-50 shadow-md h-[80%] rounded-3xl  max-w-lg flex flex-col justify-center items-center relative" >
                        <Form onSubmit={handleSubmit} />
                        <button
                            onClick={() => setIsActive(false)}
                            className="absolute top-5"
                        >
                            <IoCloseCircleSharp  size={72} />
                        </button>
                    </div>
                </div> 
                :
                <div className="fixed bottom-5 right-10">
                    <AddButton onClick={() => setIsActive(true)} />
                </div>
            }
            {sucess && <MessageSucess />}
        </>
    )
}