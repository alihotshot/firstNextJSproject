import Wrapper from "@/app/components/shared/Wrapper"
import Button from "@/app/components/shared/Button"
import Boxes from "@/app/components/widgets/Boxes"

const CoreTracks = () => {
    const coreHeading = `Core Courses \n (Common in All Specializations):`
    return (
        <section>
            <Wrapper>
                <div className=" mt-20 lg:mt-28 max-w-screen-md">
                    <h4 className=" font-semibold text-teal-900 text-sm md:text-lg">Program of Studies</h4>
                    <h2 className="text-3xl font-bold py-3 sm:text-4xl whitespace-pre-line">{coreHeading}</h2>
                    <p className="text-slate-500 mt-4 text-sm sm:text-lg">Every participant of the program will start by completing the following three core courses.</p>
                </div>
                <div className="mt-6">
                    <Button text={"Enroll Now"} />
                </div>

                {/* Boxes */}
                <Boxes />
            </Wrapper>
        </section>
    )
}

export default CoreTracks


