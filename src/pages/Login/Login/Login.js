import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, error, handleResetPassword, setUser, processLogin, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLoginDirect = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className=' mt-5 row container '>
            <div className=' col-md-6'></div>
            <div className='login col-md-6 col-sm-10'>
                <form onSubmit={processLogin}>
                    <h2 className=' mb-4'>Please Login</h2>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" onBlur={handleEmailChange} className="form-control w-75" placeholder='Your Email' required id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control w-75 " placeholder='Your Password' required id="inputPassword3" />
                        </div>
                    </div>


                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn logbtn">Login</button>
                    <span className='ms-3'><Link to='/registration'>Create a new Account</Link></span>
                    <br />
                    <br />

                    <button className='btn logbtn  ' onClick={handleResetPassword}>Reset Password</button>
                </form>
                <br />
                <div>__________𝒪ℛ__________</div>
                <br />
                <button onClick={handleGoogleLoginDirect} className='btn btn-warning  mt-2 mb-md-3'>Google Sign In</button>

            </div>
        </div>

    );
};

export default Login;