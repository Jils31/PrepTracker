function Navbar() {
    return (

        <nav className="w-full bg-white  py-4 px-6 flex justify-around items-center">

            <h1 className="text-xl text-violet-700 font-bold">PrepTracker</h1>

            <div className="ml-16">
                <button className="bg-violet-700 text-white py-2 px-4 rounded-[10px] hover:bg-violet-800">
                    Sign in with Google
                </button>
            </div>
        </nav>


    )
}

export default Navbar