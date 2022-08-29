import React, { useEffect, useRef, useState } from 'react'
import S from './style.module.css'

import { DataGrid } from '@material-ui/data-grid';

import { makeStyles, TextField, Dialog} from '@material-ui/core';

import { EditOutlined, DeleteForeverOutlined} from '@material-ui/icons';

export default function Customers() {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)

    const [clickHandler, setclickHandler] = useState('get')
    const [isopen, setisopen] = useState(false)
    
    const [id, setid] = useState('')
    const [name, setname] = useState('')
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    

    useEffect(() => {
        eventHandler()
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
          field: 'phone',
          headerName: 'Phone',
          width: 110,
          type: 'number',
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 130,
          editable: true,
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
            setphone(params.row.phone)
            setemail(params.row.email)
            setclickHandler('update')
            }
            
          const handleDelete = async()=>{
            setid(params.row.id)
            setclickHandler('delete')
            console.log('id',id)
            eventHandler()
          }

            return (
            <span>
            <span className={S.edit} onClick={handleEdit}><EditOutlined/></span>
            <span className={S.delete} onClick={handleDelete}><DeleteForeverOutlined/></span>
            </span>);
          }
        }
      ];
      
      const eventHandler = async()=>{

        setisloading(true)
        let response
        if (clickHandler == 'get'){
          const requestOptions = {
            headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
            method: 'GET',
        };
         response = await fetch("/api/customer", requestOptions);
        }

        if (clickHandler === 'update'){
          const requestOptions = {
              headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
              method: 'POST',
              body: JSON.stringify({_id:id , name: name, phone: phone, email:email})
          };
          response = await fetch("/api/customer/update",requestOptions);
        }
        if (clickHandler === 'delete'){
          const requestOptions = {
            headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
            method: 'DELETE',
            body: JSON.stringify({_id:id })
          };
         response = await fetch("/api/customer/delete",requestOptions);
         console.log("yaha se chala voh",id)
        }

        response = await response.json()
        console.log("response",response)
          let rows = []
          for (let i=0; i < response.length;i++){
            let x = { id: response[i]._id, name: response[i].name, phone: response[i].phone, email: response[i].email}
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
        <h1 className={S.heading}>Customers</h1>

        <div className={S.table}>
          <DataGrid
          loading={isloading}
          rows={data && data}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoPageSize={true}
          sx={{
            boxShadow: 2,
            border: 2,
            '& .MuiDataGrid-cell:hover': {
              color: '#05B7E1',
            },
          }}
          disableColumnMenu
          />
        </div>


        <Dialog open={isopen} className={S.modal}>

         <div className={S.close}> Edit Customer <span onClick={()=> setisopen(false)} >+</span> </div>
        
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
          label="Phone"
          type="number"
          value={phone}
          autoComplete="current-password"
          onChange={(e)=>setphone(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          value={email}
          autoComplete="current-password"
          onChange={(e)=>setemail(e.target.value)}
        />
        </form>
        <span className={S.save} onClick={eventHandler}>Save</span>
        </Dialog>
        </div>
    )
}
