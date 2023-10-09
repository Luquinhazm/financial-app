import IconProfile from '../IconProfile/iconProfile'

export default function Header() {
    return (
        <header className="h-16 flex justify-center bg-zinc-200 items-center p-2 ">
            <nav className='flex justify-between items-center px-4 w-full'>
                <ul className="flex gap-2">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Config</a></li>
                </ul>
                <IconProfile/>
            </nav>
        </header>
    )
}  