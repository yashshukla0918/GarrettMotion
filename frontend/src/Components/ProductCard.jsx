import React from 'react'
const ProductCard = ({ item }) => {

    const style = {
        card: {
            height: window.innerHeight * 0.60,
            width: window.innerWidth * 0.23,
            padding: '8px',
            margin: "20px",
            overflow: 'hidden'
        },
        image: {
            overflow: 'hidden',
            height: window.innerHeight * 0.30,
            width: window.innerWidth * 0.12
        },
        description: {
            textTransform: 'capitalize',
            width: '200px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        title  :{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width:  '150px',
            textAlign : 'center'
        }
    }
    return (
        <div style={style.card} className="card my-3 mx-2">
            <div className="card-body">
            <center><h5 style={style.title} className="text-center card-title ">{item.title}</h5></center>
                <img style={style.image} src={item.image} className="card-img-top  rounded m-1 " alt="Loading..."></img><br />
                <span class="badge bg-primary ">{item.category}</span>
                <center><p style={style.description} className='card-text p-2'>{item.description}</p></center>
                <button className='btn btn-dark p-1 m-1'>Show Details</button>
                <button className='btn btn-warning p-1 m-1' ><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Kart </button>
            </div>
        </div>
    )
}

export default ProductCard
