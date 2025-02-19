export function FeatureCards(){
    return (
        <div className="flex justify-evenly mt-36">
            <div className="flex flex-col  items-center text-center max-w-72">
                <img className="w-24 h-16  rounded-full mx-auto" src="../../images/img-1.png" alt="logo"></img>
                <div className="flex justify-center text-lg font-semibold mt-2">Track Progress</div>
                <p className="text-sm break-words mt-2 max-w-72 text-center">Monitor your learning journey with detailed analytics and progress tracking.</p>
            </div>
            <div className="flex flex-col">
                <img className="w-25 h-16  rounded-full mx-auto" src="../../images/img-3.png" alt="logo"></img>
                <div className="flex justify-center text-lg font-semibold mt-2">Track Progress</div>
                <p className="text-sm break-words mt-2 max-w-72 text-center">Monitor your learning journey with detailed analytics and progress tracking.</p>
            </div>
            <div className="flex flex-col">
                <img className="w-25 h-16  rounded-full mx-auto" src="../../images/img-2.png" alt="logo"></img>
                <div className="flex justify-center text-lg font-semibold mt-2">Track Progress</div>
                <p className="text-sm break-words mt-2 max-w-72 text-center">Monitor your learning journey with detailed analytics and progress tracking.</p>
            </div>
        </div>
    )
}