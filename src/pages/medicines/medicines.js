import React, { useEffect, useRef, useState } from 'react'
import S from './style.module.css'

import { DataGrid } from '@material-ui/data-grid';

import { DatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles, TextField, Dialog} from '@material-ui/core';

import {Add, EditOutlined, DeleteForeverOutlined} from '@material-ui/icons';
import set from 'date-fns/esm/set';

export default function Medicines() {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)

    const [clickHandler, setclickHandler] = useState('')
    const [isopen, setisopen] = useState(false)
    
    const [id, setid] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState("")
    const [quantity, setquantity] = useState("")
    const [selectedDate, handleDateChange] = useState(new Date());

    useEffect(() => {
        eventHandler('get')
    }, [])

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 180 },
        {
          field: 'name',
          headerName: 'Name',
          width: 170,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 110,
          type: 'number',
          editable: true,
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
          type: 'number',
          width: 130,
          editable: true,
        },
        {
          field: 'expiry',
          headerName: 'Expiry',
          type: 'date',
          sortable: true,
          width: 140,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          width:110,
          renderCell: (params) => { 

          const handleEdit = async()=>{
            setisopen(true)
            await sleep(450);
            setid(params.row.id)
            setname(params.row.name)
            setprice(params.row.price)
            setquantity(params.row.quantity)
            handleDateChange(new Date(params.row.expiry))
            setclickHandler('update')
            }

            return (
            <span>
            <span className={S.edit} onClick={handleEdit}><EditOutlined/></span>
            <span className={S.delete} onClick={()=>{setid(params.row.id); eventHandler('delete')}}><DeleteForeverOutlined/></span>
            </span>);
          }
        }
      ];
      
      const eventHandler = async(ar)=>{

        setisloading(true)
        let response
        if (ar === 'get'){
          const requestOptions = {
            headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
            method: 'GET',
        };
         response = await fetch("/api/medicine", requestOptions);
         console.log('get')
        }

        if (ar === 'add'){
          const requestOptions = {
          headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
          method: 'POST',
          body: JSON.stringify({ name: name, price: price, quantity:quantity, expiry: selectedDate })
          };
          response = await fetch("/api/medicine/add",requestOptions);
        }

        if (ar === 'update'){
          const requestOptions = {
              headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
              method: 'POST',
              body: JSON.stringify({_id:id , name: name, price: price, quantity:quantity, expiry: selectedDate })
          };
          response = await fetch("/api/medicine/update",requestOptions);
        }
        if (ar === 'delete'){
          const requestOptions = {
            headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
            method: 'DELETE',
            body: JSON.stringify({_id:id })
          };
          if (id === ''){
            setisloading(false)
            return
          }
        response = await fetch("/api/medicine/delete",requestOptions);
        console.log("yaha se chala voh",id)
      
        }

        response = await response.json()
        console.log("response",response)
          let rows = []
          for (let i=0; i < response.length;i++){
            let d = new Date(response[i].expiry)
            let x = { id: response[i]._id, name: response[i].name, price: response[i].price, quantity: response[i].quantity, expiry: d.toLocaleDateString()}
            rows.push(x)
          }
          setisopen(false)
          setdata(rows)
          setisloading(false)
          return
      }


      const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      const classes = useStyles();


    return (
         <div>
        <h1 className={S.heading}>Medicines</h1>
           <div className={S.add_container}>
          <span onClick={()=> {
            setisopen(true); setclickHandler("add"); setname(''); setprice(''); setquantity(''); handleDateChange(new Date()) 
            }} className={S.add_btn}> 
            <Add className={S.add_icon}/> Add </span>
           </div>

        <div className={S.table}>
          <DataGrid
          loading={isloading}
          rows={data && data}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoPageSize={true}
          disableColumnMenu
          />
        </div>


        <Dialog open={isopen} className={S.modal}>

         <div className={S.close}> Add Medicine <span onClick={()=> setisopen(false)} >+</span> </div>
        
        <form className={classes.root} className={S.form}>
          
        <TextField
          id="standard-password-input"
          label="Name"
          type="text"
          value={name}
          autoComplete="current-password"
          onChange={(e)=>setname(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Price"
          type="number"
          value={price}
          autoComplete="current-password"
          onChange={(e)=>setprice(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Quantity"
          type="number"
          value={quantity}
          autoComplete="current-password"
          onChange={(e)=>setquantity(e.target.value)}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker label="Expiry" value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
        </form>
        <span className={S.save} onClick={()=>eventHandler(clickHandler)}>Save</span>
        </Dialog>
        </div>
    )
}