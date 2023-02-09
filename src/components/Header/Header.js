
import Searchimg from '../../assets/images/search.svg'
import Novicons from "../../assets/images/bill.svg"
import Avatarimg from "../../assets/images/avatar.jpg"


const Header = () => {
  return (
    <div className="sidebar-Header">
      <div className="container">
        <div className="site-header-inner">

          <h2 className="titile">Tickets</h2>
          <div className='header-link'>
            <button className="header-button">
              <img className='header-icons' src={Searchimg} width='15' height='15' alt="search-logo" />
            </button>
            <button className="header-button">
              <img src={Novicons} width='15' height='15' alt="search-logo" />
            </button>
            <span className='site-header-span'></span>

            <h3 className="avatar-name">Jones Ferdinand</h3>
            <button className="header-button-img">
              <img className='header-img' src={Avatarimg} width='44' height='44' alt="search-logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
