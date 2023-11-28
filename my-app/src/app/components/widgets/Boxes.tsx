
const CoreTrack: { header: string, description: string, number: number }[] = [
    {
        header: 'Quarter I',
        description: 'CS-101: Object-Oriented Programming using Typescript',
        number: 1
    },
    {
        header: 'Quarter II',
        description: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
        number: 1
    },
    {
        header: 'Quarter III',
        description: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
        number: 1
    }
]

const Boxes = () => {
    return (
        <div className="flex my-20 space-x-4">
            {
                CoreTrack.map((item, i) => {
                    return (
                        <div className=" border rounded-md w-4/12 px-8 py-12 relative ">
                            <h4 className=" font-bold text-lg">{item.header}</h4>
                            <p className="mt-2 text-slate-600">{item.description}</p>
                            <span className=" absolute top-4 right-10 text-9xl font-bold text-gray-200 -z-10">{i + 1}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Boxes