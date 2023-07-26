import React, { useContext } from 'react'
import { AppContext } from '../Model/AppContext'

const PopUp = () => {
    const { item } = useContext(AppContext)
    const style = {
        image: {
            width: '18rem',
            height: '18rem'
        },
        footer: {
            display: 'flex',
            justifyContent : 'space-between'

        }
    }
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-warning text-dark">
                        <h5 className="modal-title text-dark" id="exampleModalLabel">{item.item?.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row text-center">
                            <div className="col-sm-6">
                                <img style={style.image} src={item.item.image} alt="" />
                            </div>
                            <div className="col-sm-6 ">
                                <center><span className="badge bg-primary">{item.item.category}</span><br/><h4>Description</h4></center>
                                <div className='modal-dialog-scrollable'>
                                    {item.item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div >
                            <h2 >Price : ${item.item.price}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp
