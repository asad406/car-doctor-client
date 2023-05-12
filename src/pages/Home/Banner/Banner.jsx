import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full  h-[600px]">
            <div
                id="slide1"
                className="carousel-item relative w-full"
            >
                
                <img src={img1} className='rounded-xl w-full' alt="" />
                <div className="absolute rounded-xl flex items-center  text-white w-1/2 h-full bg-gradient-to-r from-black pl-7">
                    <div className='space-y-5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-warning mr-2">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                    <a
                        href="#slide4"
                        className="btn btn-circle mr-2"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide2"
                className="carousel-item relative w-full"
            >
                <img src={img2} className='rounded-xl w-full' alt="" />
                <div className="absolute rounded-xl flex items-center  text-white w-1/2 h-full bg-gradient-to-r from-black pl-7">
                    <div className='space-y-5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-warning mr-2">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                    <a
                        href="#slide1"
                        className="btn btn-circle mr-2"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide3"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide3"
                className="carousel-item relative w-full"
            >
                <img src={img3} className='rounded-xl w-full' alt="" />
                <div className="absolute rounded-xl flex items-center  text-white w-1/2 h-full bg-gradient-to-r from-black pl-7">
                    <div className='space-y-5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-warning mr-2">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                    <a
                        href="#slide2"
                        className="btn btn-circle mr-2"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide4"
                className="carousel-item relative w-full"
            >
               <img src={img4} className='rounded-xl w-full' alt="" />
                <div className="absolute rounded-xl flex items-center  text-white w-1/2 h-full bg-gradient-to-r from-black pl-7">
                    <div className='space-y-5'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-warning mr-2">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>

                        </div>
                    </div>
                </div>
               <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                    <a
                        href="#slide3"
                        className="btn btn-circle mr-2"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide1"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
