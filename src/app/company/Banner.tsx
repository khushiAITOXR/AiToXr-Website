import Button from "../components /Button";

const Banner: React.FC = () =>{
    const title = 'We Can Help You With';
    const description=`Our team work in a remote environment. Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world. Our team work in a remote environment. Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world.`
    const handleButtonClick = () => {
        console.log('Button clicked');
      };
    return(
        <section className="w-full bg-gradient-to-r from-gr-start to-gr-end py-16">
            <h2 className=" text-white text-[28px] sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[48px]  font-bold mb-8 text-center ">
               {title}
                </h2>
            <p className="text-justify xl:text-center  w-[50%] m-auto text-white mt-6">{description}</p>
            <div className="flex justify-center mt-10">
            <Button variant={'white'} label="Let's Connect" onClick={handleButtonClick}/>
            </div>
        </section>
    )

}

export default Banner;