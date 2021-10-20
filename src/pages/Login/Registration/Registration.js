import { useHistory, useLocation } from 'react-router';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, setUser, setIsLoading, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className='row container'>
            <div className='col-md-6'>
                {/* <img src="https://drpaulmendoza.com/wp-content/uploads/2020/05/stetho.jpg" alt="" /> */}
            </div>
            <div className=' mt-5 login col-md-6'>
                <h2 className=' mb-4'>Please Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="name" onBlur={handleNameChange} className="form-control w-75" id="inputName" required placeholder='Your Name' />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" onBlur={handleEmailChange} required className="form-control w-75" id="inputEmail3"
                                placeholder='Your Email' />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" required className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10 mb-3">
                            <input type="password" onBlur={handlePasswordChange} className="form-control w-75" id="inputPassword3"
                                placeholder='Your Password' />
                        </div>
                    </div>


                    <button type="submit" className="btn logbtn">Register</button>
                    <Link to='/login'><span className='ms-3'>Already have an account?</span></Link>
                </form>
                <br />
                <div>__________𝒪ℛ__________</div>
                <br />
                <button onClick={handleGoogleLogin} className='btn btn-warning mb-md-5 mt-md-3'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Registration;