export function FeatureCards(){
    return (
        <div className="flex justify-evenly mt-36">
            <div className="flex flex-col  items-center text-center max-w-72">
                <div className="w-20 h-20 bg-[#F4E7FE] rounded-full flex items-center justify-center overflow-hidden mx-auto">
                    <img className="w-12 h-12 object-contain" src="../../images/target.svg" alt="logo"/>
                </div>
                <div className="flex justify-center text-lg font-semibold mt-2">Track Progress</div>
                <p className="text-sm break-words mt-2 max-w-72 text-center">Monitor your learning journey with detailed analytics and progress tracking.</p>
            </div>
            <div className="flex flex-col">
                <div className="w-20 h-20 bg-[#F4E7FE] rounded-full flex items-center justify-center overflow-hidden mx-auto">
                    <img className="w-12 h-12 object-contain" src="../../images/book.svg" alt="logo"/>
                </div>
                <div className="flex justify-center text-lg font-semibold mt-2">Track Progress</div>
                <p className="text-sm break-words mt-2 max-w-72 text-center">Monitor your learning journey with detailed analytics and progress tracking.</p>
            </div>
            <div className="flex flex-col">
                <div className="w-20 h-20 bg-[#F4E7FE] rounded-full flex items-center justify-center overflow-hidden mx-auto">
                    <img className="w-12 h-12 object-contain" src="../../images/trophy.svg" alt="logo"/>
                </div>
                <div className="flex justify-center text-lg font-semibold mt-2">Track Progress</div>
                <p className="text-sm break-words mt-2 max-w-72 text-center">Monitor your learning journey with detailed analytics and progress tracking.</p>
            </div>
        </div>
    )
}