import React from 'react';
import google from '../../../images/icons/google.png';
import facebook from '../../../images/icons/fb.png';
import github from '../../../images/icons/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1) {
        return <Loading />
    }
    
    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {error1.message}</p>
            </div>
    }
    if(user || user1){
        navigate("/home");
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                onClick={() => signInWithGoogle()}
                 className='btn btn-primary w-50 mx-auto d-block my-2'>
                <img style={{width: '30px'}} src={google} alt="" />
                Google with Sign In</button>
            </div>
            <div className=''>
                <button className='btn btn-primary w-50 mx-auto d-block my-2'>
                <img style={{width: '30px'}} src={facebook} alt="" />
                Facebook with Sign In</button>
            </div>
            <div className=''>
                <button
                    onClick={() => signInWithGithub()}
                 className='btn btn-primary w-50 mx-auto d-block'>
                <img style={{width: '30px'}} src={github} alt="" />
                Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;