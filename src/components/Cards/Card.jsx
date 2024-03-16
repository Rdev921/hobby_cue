import { useState } from 'react'
import { data } from './data.js'
const Card = () => {
    const [cardData, setCardData] = useState(data)
    return (
        <>
            <section>
                <div className="container">
                    <div className="row  ">
                        {cardData.map((cardItems) => (
                            <div className="col-12 col-lg-6 col-md-12 mt-5 mb-2 ">
                                <div className="text-with-icon border border-light-subtle rounded-2  px-4 py-2  ">
                                    <div className='d-flex gap-4 '>
                                        <i class="fa-solid fa-user-group"></i>
                                        <p className='description fw-bolder '>{cardItems.title}</p>
                                    </div>
                                    <p className='description fw-medium '>{cardItems.description}</p>
                                    <button className='action-btn w-auto px-4 py-1 '>{cardItems.action}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </>

    )
}
export default Card