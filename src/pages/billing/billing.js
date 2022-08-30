import React, { useEffect, useState, useRef } from "react";

import S from './style.module.css'

import {Multiselect} from 'multiselect-react-dropdown'
import {TextField} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons'

export default function Billing() {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()
    const template = {selectedmed:'', quantity:''};
    const [orders, setorders] = useState([template])

    const [total, settotal] = useState(0)
    
    useEffect(() => {
        const fetchApi = async()=>{
            const requestOptions = {
                headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
                method: 'GET',
            };

            let response = await fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine/", requestOptions);

            response = await response.json()
            console.log("response",response)

            setdata(response)
            
            setisloading(false)
        }
        fetchApi()
      }, []);

    useEffect(() => {
      let totalv = 0
      {orders.map((ord)=> { if(ord.selectedmed[0]) 
        totalv += ord.selectedmed[0].price * ord.quantity})}
      settotal(totalv)
    }, [orders])

      const addOrder = ()=>{
        console.log('added')
          setorders([...orders,template])
      }

      const handleSelect = (e,index)=>{
        console.log(e)
        const updatedOrder = orders.map((order,i)=>
        index == i ? Object.assign(order,{ 'selectedmed' : e}) : order
        )
        
        setorders(updatedOrder)
        console.log('change',orders)
      }

      const handleChange = (e,index)=>{
          if (e.target.value < 1){
            return
          }
          if(!orders[index].selectedmed[0]){
            return
          }
          if (e.target.value <= orders[index].selectedmed[0].quantity){
            const updatedOrder = orders.map((order,i)=>
            index == i ? Object.assign(order,{ [e.target.name] : e.target.value}) : order)
            
            setorders(updatedOrder)
            // console.log('change',orders)
          }
      }
      
      const removeOrder = (index)=>{
        console.log('del',index)
        setorders((prev)=> prev.filter((item)=> item !== prev[index]))
      }

      const handleSubmit = async()=>{
        
        const customerRequestOptions = {
          headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
          method: 'POST',
          body: JSON.stringify({ name: name, email: email, phone:phone })
        };

        let CustomerResponse = await fetch("https://pharmacy-backend-dex.herokuapp.com/api/customer/add", customerRequestOptions);
        CustomerResponse = CustomerResponse.json
        console.log(CustomerResponse)

        // add sales
        let ordersTotal = 0
        let ord = orders.map(order => {
          ordersTotal += (order.selectedmed[0].price) * (order.quantity)
          return Object.assign({} ,{id : order.selectedmed[0]._id ,name: order.selectedmed[0].name, quantity : order.quantity})
        });
          console.log("ord",ord)

        const requestOptions = {
          headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
          method: 'POST',
          body: JSON.stringify({ name:name, phone:phone, orders:ord, ordersTotal:ordersTotal })
        };
        console.log('name:',name, 'phone:',phone, 'orders:',ord, 'ordersTotal:',ordersTotal )
        let response = await fetch("https://pharmacy-backend-dex.herokuapp.com/api/sale/add", requestOptions);
        response = response.json
        console.log(response)


        setname('')
        setphone('')
        setemail('')
        setorders([template])

        handlequantity(ord)
      }

      const handlequantity = async(ord)=>{
        for (let i=0; i<ord.length;i++){
          for (let j=0; j<data.length;j++){
            console.log(ord[i].id == data[j]._id,data[j]._id,ord[i].id)
            if (ord[i].id == data[j]._id){
              console.log(data[j].quantity - ord[i].quantity,ord[i].id)
              const requestOptions = {
                headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
                method: 'POST',
                body: JSON.stringify({ quantity: data[j].quantity - ord[i].quantity, _id: ord[i].id })
              };
              let response = await fetch("/api/medicine/updateQ", requestOptions);
              response = response.json
              console.log(response)
            }
          }
        }
      }
    

    return (
      <div>
        <h1 className={S.heading}>Billing</h1>

        <div className={S.customer_info_container}>
          <h3 className={S.heading2}>Customer Information</h3>
          <div className={S.customer_info}>
            <TextField
            id="standard-password-input"
            label="Name"
            type="text"
            value={name}
            autoComplete="current-password"
            onChange={(e)=>setname(e.target.value)}/>
            
            <TextField
            id="standard-password-input"
            label="Email"
            type="text"
            value={email}
            autoComplete="current-password"
            onChange={(e)=>setemail(e.target.value)}/>
            
            <TextField
            id="standard-password-input"
            label="Phone"
            type="text"
            value={phone}
            autoComplete="current-password"
            onChange={(e)=>setphone(e.target.value)}/>

          </div>

            {!isloading && orders.map((order, index) => 
            <div key={index} className={S.med}>
            <span className={S.select}><Multiselect options={data} displayValue='name' onSelect={(e)=>{handleSelect(e,index)}} selectionLimit={1} name="selectedmed" selectedValues={order.selectedmed}/></span>
            
            <TextField
            id="standard-password-input"
            name="quantity"
            label="Quntity"
            type="number"
            value={order.quantity}
            autoComplete="current-password"
            onChange={e => handleChange(e,index)} value={order.quantity}/>

            <span className={S.price_container}>
              <span className={S.price_heading}>Price</span>
            ₹{orders[index].selectedmed[0] && orders[index].selectedmed[0].price * orders[index].quantity}
            </span>

            <span onClick={()=>removeOrder(index)} className={S.delete_btn}>Delete</span>
            </div>)}
            <div className={S.add_container}>
            <AddCircle onClick={addOrder} fontSize="large" className={S.add_btn}/>
            </div>
            
            <div className={S.submit_container}>
              <span onClick={handleSubmit} className={S.submit_btn}>Submit</span>

              <span className={S.total_container}>
                <span className={S.total_heading}>Total</span>
                <span className={S.total}>₹{total}</span>
              </span>
            </div>

          </div>
        </div>
    )
}
