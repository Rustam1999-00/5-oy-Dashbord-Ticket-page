
import { SidebarData } from '../data'
import logo from '../../assets/images/logo.svg'
import {Link,NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar '>
<a className='sidebar-logo' href='/'><img src={logo} className='sidebar-logo-img 'width='32' height='32' alt='side-logo'/>  Dashboard Kit</a>
  <nav>
    <ul className='sidebar-list'>
      {
        SidebarData.map((data,idx)=>(
          <li className='sidebar-item' key={idx}>
            <NavLink className={({isActive})=> isActive ? 'sidebar-link-active' : 'sidebar-link' } to={`${data.text === 'Tickets'
          ? '/Ticked': data.text === 'Overview' ? '/' : '' }`} >
                <img className='sidebar-img' src={data.img} width='16' height='16' alt={data.text}/>
                {data.text}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </nav>

      
    </div>
  )
}

export default Sidebar
