import React, { useContext, useEffect, useState } from 'react'
import { Drawer } from "@mui/material";
import { AppContext } from '../Model/AppContext';
import './kart.css'
const KartDrawer = () => {
    const { item, setItem } = useContext(AppContext)
    const [total, setTotal] = useState(0)
    const style = {
        bottomPush: {
            position: "fixed",
            bottom: 0,
            // marginLeft : '7rem',
            textAlign: "center",
            backgroundColor: "white",
            width: 'max-content',
            minWidth: '33 %',
            paddingRight:"10rem",
            paddingLeft:'10rem',
            paddingTop:"2rem",
            paddingBottom: 10,
    }
}
useEffect(() => {
    let x = [...item.kart].reduce((total, curr) => { return total + curr.price }, 0)
    setTotal(x)
}, [item.kart])
return (
    <Drawer

        open={item.open}
        anchor='right'
        onClose={() => {
            setItem((prev) => ({ ...prev, ...{ open: false } }))
        }}
    >
        <div
            className='p-4 text-center '
            style={{
                width: window.innerWidth * 0.40
            }}
        >
            <table className='table   table-hover p-3'>
                <thead className='p-3 '>
                    <tr className='text-center '>
                        <th>S.No</th>
                        <th>Item</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        [...item.kart].map((item, idx) => {
                            return (<tr className='text-center'>
                                <td>{idx + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <center><div className='price' style={style.bottomPush}><h4>Total Price : $ {total.toFixed(3)}</h4></div></center>
        </div>
    </Drawer>
)
}

export default KartDrawer
