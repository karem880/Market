import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <div className='bg-slate-900 flex flex-col gap-20 items-center justify-center h-[100vh] w-full '>
            <NavLink to={'/'}><img src="/public/assets/404-page-not-found.png" alt="" /></NavLink>
            <span className="loader1"></span>        </div>
    );
}

export default NotFound;