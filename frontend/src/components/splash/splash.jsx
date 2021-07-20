import React from 'react';
import {Link} from 'react-router-dom';  

const Splash = () => {
    return (
    <div className='body-container'>
     <div className='transition-container'>
        <section className='transition'> 
            <div className='left-1'>
                <p>Browse and share your favorite educational resources <span>with confidence</span>
                </p>

                <img className='transit-icon' src="/images/books.jpg" alt="travel" />
    
                <h2>
                    Organize h
                </h2>
                <Link className='signup' to='/signup'>Sign up</Link>
            </div>
            <div className='right-1'>
                 <img  src={window.ariplane_icon} alt="travel" />    
            </div>
        </section>
    </div>
        <section className='features'>
            <div className='left-2'>
                <div className='left-detail'>
                    <h1>
                        Track balance
                    </h1>

                    <h2>Keep track of shared expenses, balances, and who owns who.</h2>
                </div>
                     <img className='feature-img' src={window.track_balances} alt="track" />
                
            </div>
             <div className='right-2'>
                 <div className='right-detail'>
                 <h1>
                     Organize expenses
                 </h1>
                <h2>Split expenses with any people: trips, housemates, friends and family</h2>
                </div>
                 <img className='feature-img' src={window.organize_expense} alt="organize" />
                 
             </div>
            
        </section>

    

    </div>

    )
}

export default Splash;