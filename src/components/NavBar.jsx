export function NavBar() {
    return (
        <nav className="w-full bg-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl text-violet-700 font-bold">PrepTracker</h1>
            <button className="bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-800">
                Sign in with Google
            </button>
        </nav>
    );
}