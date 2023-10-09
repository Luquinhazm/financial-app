export default function Input({placeholder, type}){
    return(
        <>
            <input type={type}
            placeholder={placeholder}
            className="rounded-md h-10 bg-inherit border-zinc-400 border-2 px-2"/>
        </>
    )
}