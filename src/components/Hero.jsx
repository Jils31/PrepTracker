export function Hero() {
    return (
        <section className="w-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="mt-16 text-6xl md:text-6xl text-gray-900 font-bold">
                Master Your Prep Journey
            </h1>

            <p className="font-semibold text-gray-600 mt-6 text-lg max-w-2xl">
                Track your progress, analyze your performance, and achieve your goals with PrepTracks intelligent learning platform.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4">
                <button className="bg-violet-700 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-violet-800">
                    Get Started →
                </button>
            </div>
        </section>
    );
}