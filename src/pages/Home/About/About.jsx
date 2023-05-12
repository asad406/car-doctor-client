import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero mt-6 min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative md:w-1/2 mb-24'>
                    <img
                        src={person}
                        className="w-[460px] h-[473px]  rounded-lg shadow-2xl"
                    />
                    <img
                        src={parts}
                        className="w-[327px] h-[332px] object-cover border-[10px] border-white rounded-lg shadow-2xl absolute top-1/2 left-1/3"
                    />
                </div>
                <div className="md:w-1/2 space-y-5">
                    <h5 className="text-xl font-bold text-orange-400">
                        About us
                    </h5>
                    <h1 className="text-5xl font-bold">
                        We are qualified & of experience in this field.
                    </h1>
                    <p className="">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        do not look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by
                        injected humour, or randomised words which do not look
                        even slightly believable.
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
