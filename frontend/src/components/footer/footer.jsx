import React from 'react'


const Footer =()=>{
   return (
    <div className='footer'>
        <div className='footer-left'>
            <h1>Proudly Made By:</h1>
            <h2>Donnie Wombough: 
                <a className="fab fa-github-alt" href="https://github.com/SymmetricInDesign" target='_blank'></a>
                <a className='fab fa-linkedin-in' href='#' target='_blank'></a>
                <a className='fab fa-angellist' href="#" target='_blank'></a>
            
            </h2>
            <h2>Priyesh Shah: 
                <a className="fab fa-github-alt" href="https://github.com/priyeshshah147" target='_blank'></a>
                <a className='fab fa-linkedin-in' href='#' target='_blank'></a>
                <a className='fab fa-angellist' href="#" target='_blank'></a>
            </h2>
            
        </div>
        <div className ='footer-right'>
        <h2>Wen Liu:
                <a className= "fab fa-github-alt" href="https://github.com/robokitten007" target='_blank'></a>
                <a className='fab fa-linkedin-in' href='#' target='_blank'></a>
                <a className='fab fa-angellist' href="#" target='_blank'></a>
            </h2>
            <h2>Yung Cai:
                <a className="fab fa-github-alt" href="https://github.com/yungcai" target='_blank'></a>
                <a className='fab fa-linkedin-in' href='#' target='_blank'></a>
                <a className='fab fa-angellist' href="#" target='_blank'></a>
            </h2>        </div>
    </div>

    )
}

export default Footer;