import { Link } from 'react-router-dom';
import img1 from '../../assets/images/login/login.svg';
const SignUp = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,name, password);
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className="lg:w-1/2">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>
                <div className="card  lg:w-1/2  shadow-2xl bg-base-100">
                    <div className="card-body w-full">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="sign up"
                                />
                            </div>
                            <p className="py-4">
                                Already have an account?{' '}
                                <Link
                                    className="text-orange-500 font-bold"
                                    to={'/login'}
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
