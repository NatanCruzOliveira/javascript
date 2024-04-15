
import logo from '../../png/logo.png';

function Header() {

    const decrLogo = 'Essa é a logo do Blog';

    return (
        <header className='flex-space-between'>
            <div className='logo'>
                <img src = {logo} width= '100px' alt = {decrLogo}/>
            </div>
            <div className='search'>
                <input type='text' name='search' className='input-search' placeholder='Pesquise por notícias, artigos e muito mais'></input>
            </div>
            <ul className='menu'>
                <li> <a href='#' className='nav-link'> Categorias </a> </li>
                <li> <a href='#' className='nav-link'> Sobre </a> </li>
                <li> <a href='#' className='nav-link'> Contatos </a> </li>
            </ul>
        </header>
    );
}

export default Header;