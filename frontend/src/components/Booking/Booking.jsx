import React, {useState} from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

import {useNavigate} from 'react-router-dom'

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour
    const navigate =useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: 'John Cena',
        phone: '08123456789',
        groupSize: 3,
        bookAt: '06-01-2023'
    })

    const handleChange = e => {
        setCredentials(prev => ({... prev, [e.target.id]:e.target.value}))
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.groupSize) + Number(serviceFee)

    //send data to server
    const handleClick = e => {
        e.preventDefault()

        navigate('/thank-you')
    }

  return (
    <div className='booking'>
      <div className='booking_top d-flex align-items-center justify-content-between'>
        <h3>${price} <span>/per person</span></h3>
        <span className='tour_rating d-flex align-items-center'>
            <i class="ri-star-s-fill"></i> 
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className='booking_form'>
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Full Name' id="fullName" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="phone" placeholder='Phone Number' id="phone" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id="bookAt" required onChange={handleChange}/>
                <input type="number" placeholder='Person' id="groupSize" required onChange={handleChange}/>
            </FormGroup>
        </Form>
      </div>

      <div className='booking_bottom'>
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-tiems-center gap-1'>${price} <i class="ri-close-line"></i> 1 person</h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service Charge</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='total border-0 px-0'>
                <h5>Total</h5>
                <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>

        <Button className='btn primary_btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  )
}

export default Booking
