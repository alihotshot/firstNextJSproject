
const Boxes = () => {
    return (
        <div className="flex my-20 space-x-4">
            <div className=" border rounded-md w-4/12 px-8 py-12 relative">
                <h4 className=" font-bold text-lg">Quarter I</h4>
                <p className="mt-2 text-slate-600">CS-101: Object-Oriented Programming using Typescript</p>
                <span className=" absolute top-4 right-10 text-9xl font-bold text-gray-200 -z-10">1</span>
            </div>
            <div className=" border rounded-md w-4/12 px-8 py-12 relative">
                <h4 className=" font-bold text-lg">Quarter II</h4>
                <p className="mt-2 text-slate-600">CS-101: Object-Oriented Programming using Typescript</p>
                <span className=" absolute top-4 right-10 text-9xl font-bold text-gray-200 -z-10">2</span>
            </div>
            <div className=" border rounded-md w-4/12 px-8 py-12 relative">
                <h4 className=" font-bold text-lg">Quarter III</h4>
                <p className="mt-2 text-slate-600">CS-101: Object-Oriented Programming using Typescript</p>
                <span className=" absolute top-4 right-10 text-9xl font-bold text-gray-200 -z-10">3</span>
            </div>
        </div>
    )
}

export default Boxes