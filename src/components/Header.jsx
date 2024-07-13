import React from 'react'

function Header() {
    return (
        <div>
            <nav class="navbar" style={{ color: 'white', backgroundColor: 'black' }}>
                <div class="container-fluid" >
                    <a class="navbar-brand" style={{ color: 'white' }} href="#">SmithScript</a>
                    <a href="https://mapur2.github.io/new_portfolio/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary cross">
                        Made with 💖 by Rupam Modak
                    </button></a>
                </div>
            </nav>
        </div>
    )
}

export default Header
