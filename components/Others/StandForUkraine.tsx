const StandForUkrain = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="flex dark:bg-darksurface">
            <div className="m-auto  flex w-[1300px] max-w-[1300px] gap-[1rem] items-center justify-center py-[10px] px-[30px] 992max:flex">
                <picture>
                    <img src="https://static.create.vista.com/images/banners/no-war/logo-banner-ua.svg" alt="" />
                </picture>
                <p className="text-lightcolor dark:text-paragraphdarkcolor text-justify ">#StandWithUkrain | Let us support Ukrainian</p>
            </div>
        </footer>
    );
};

export default StandForUkrain;