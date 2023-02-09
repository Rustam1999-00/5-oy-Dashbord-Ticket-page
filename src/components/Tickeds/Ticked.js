
import Sorts from '../../assets/images/sort.svg'
import Filter from '../../assets/images/filter.svg'

import { Alltickeds } from '../data'


const Ticked = () => {



    return (
        <div className="Tickeds-page">

            <div className="container ">
                <div className="ticked-page-inner">
                    <h2> All tickets</h2>
                    <ul className='All-tickets-list'>
                        <li className='All-tickets-item'>
                            <button className='All-tickets-button'>
                                <img src={Sorts} width="16" height="16" alt="sort" />
                                <p className='All-tickets-text'>Sort</p>
                            </button>
                            <button className='All-tickets-button'>
                                <img src={Filter} width="16" height="16" alt="filter" />
                                <p className='All-tickets-text'>Filter</p>
                            </button>
                        </li>
                    </ul>


                </div>
                <div className='ticked-body  '>
                    <div className='ticked-body-inner row '>
                        <p className='ticked-body__text col-4'>
                            Ticket details
                        </p>
                        <p className='ticked-body__text name col-3'>
                            Customer name
                        </p>
                        <p className='ticked-body__text col-3'>
                            Date
                        </p>
                        <p className='ticked-body__text col-2'>
                            Priority
                        </p>
                    </div>
                    <hr />
                </div>




                <ul className='Ticked-page'>
                    {
                        Alltickeds.map((tickeds) => (
                            <li className='Ticked-item-page item-page row align-item-center column'>
                                <img className='col-1 rounded-pill' src={tickeds.img} width="14" height="64" alt={tickeds.customername} />

                                <div className='item-page-content col-4'>
                                    <h4 className='item-page-title'>
                                        {tickeds.ticket}
                                    </h4>
                                    <span className='item-page-span'>{tickeds.updated}</span>
                                </div>
                                <div className='item-page-content col-2'>
                                    <h5 className='item-page-title'>
                                        {tickeds.customername}
                                    </h5>
                                    <span className='item-page-span'>{tickeds.data}</span>
                                </div>
                                <div className='item-page-content col-3'>
                                    <h4 className='item-page-title'>
                                        {tickeds.datatwo}
                                    </h4>
                                    <span className='item-page-span'>{tickeds.time}</span>
                                </div>
                                <button  className={`${
                                    tickeds.Priority === 'High' ? ' bg-danger item-page-button  d-bock  col-1'
                                    : tickeds.Priority === 'Low' ? 'bg-warning item-page-button  d-bock  col-1'
                                    : tickeds.Priority === 'Normal' ? 'bg-success item-page-button  d-bock col-1': ''
                                }`} > 
                                    {tickeds.Priority}
                                </button>
                              
                               
                                        <img className='col-1 row-2  d-bock ' style={{}} src={tickeds.vector} width="4" height="16" alt='select' />
                                    

                              
                            </li>
                        ))
                    }
                </ul>





            </div>



        </div>
    )
}

export default Ticked
