import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className='mb-5'>
            <div className='text-center space-y-5 mt-5 '>
                <h5 className="text-xl font-bold text-orange-400">Service</h5>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className='lg:w-1/2 mx-auto'>
                    the majority have suffered alteration in some form, by
                    injected humour, or randomized words which do not look even
                    slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
