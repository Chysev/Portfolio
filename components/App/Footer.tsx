const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="flex">
            <div className="m-auto mt-[5rem] flex w-[1300px] max-w-[1300px] items-center justify-center p-[20px] 992max:flex">
                <p className="text-lightcolor dark:text-paragraphdarkcolor text-justify ">&copy; Copyright {year} - Created by John Layda. All right reserved. </p>
            </div>
        </footer>
    );
};

export default Footer;