
import logo from '../../png/logo.png';

function Header() {

    const decrLogo = 'Essa é a logo do Blog';

    return (
        <header>
            <div className='logo'>
                <img src = {logo} width= '100px' alt = {decrLogo}/>
            </div>
            <div className='search'>

            </div>
            <div className='menu'>
                
            </div>
        </header>
    );
}

export default Header;