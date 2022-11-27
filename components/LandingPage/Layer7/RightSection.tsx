const RightSection = () => {
    return (
        <form
            action="https://send.pageclip.co/f4p3YpiPFMVQQPh641KFQExpXGlReG2S/Portfolio"
            method="post"
            className="-mx-3 mb-6 flex flex-wrap 992max:mx-auto 992max:mb-auto 992max:items-center">

            <div className="w-full">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide">Your Name</label>
                <input
                    placeholder="John Layda"
                    className="mb-3 flex w-[500px] max-w-[600px] rounded bg-lightsurface py-3 px-4 leading-tight text-lightcolor focus:bg-white focus:outline-none dark:bg-darksurface dark:text-white 380max:w-[320px] 480max:w-[340px] 320max:w-[280px] 572max:max-w-[440px]"
                    type="Name"
                    id="Name"
                    name="Name"
                    required />

                <label className="mb-2 block text-xs font-bold uppercase tracking-wide">Email Adress</label>
                <input
                    placeholder="example@example.com"
                    className="mb-3 flex w-[500px] max-w-[600px] rounded bg-lightsurface py-3 px-4 leading-tight text-lightcolor focus:bg-white focus:outline-none dark:bg-darksurface dark:text-white 380max:w-[320px] 480max:w-[340px] 320max:w-[280px] 572max:max-w-[440px]"
                    type="Name"
                    id="Name"
                    name="Name"
                    required />

                <label className="mb-2 block text-xs font-bold uppercase tracking-wide">Message</label>
                <textarea
                    placeholder="Message"
                    className="mb-3 w-[500px] max-w-[600px] rounded bg-lightsurface py-3  px-4 leading-tight text-lightcolor focus:bg-white  focus:outline-none  dark:bg-darksurface  dark:text-white  480max:w-[340px] 380max:w-[320px] 320max:w-[280px] 572max:max-w-[440px]"
                    typeof="Message"
                    id="Message"
                    name="Message"
                    cols={30}
                    rows={10}
                    required />

                <div>
                    <button
                        className="inline-block rounded-md border border-solid border-lightcolor bg-[whitesmoke] px-6 pt-2 pb-2 text-white dark:border-darkcolor  dark:bg-darksurface dark:text-darkcolor">
                        Submit
                    </button>
                </div>

            </div>
        </form>
    );
};

export default RightSection;