import React, { useEffect, useState } from 'react'
import S from './style.module.css'

import {ExpandMore} from '@material-ui/icons'
import { Accordion, AccordionDetails, AccordionSummary,  Chip } from '@material-ui/core';

import { Line, Bar } from 'react-chartjs-2'; 



export default function Sales() {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)
    const [weeklySales, setweeklySales] = useState()
    const [monthlySales, setmonthlySales] = useState()

    Date.prototype.getMonthWeek = function(){
      var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
      return Math.ceil((this.getDate() + firstDay)/7);
    }

    useEffect(() => {
      const fetchApi = async() => {
        const requestOptions = {
          headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
          method: 'GET'};
      let response = await fetch("https://pharmacy-backend-dex.herokuapp.com/api/sale", requestOptions);
      response = await response.json()
      console.log("response",response)
      let rows = []
      let weeklySale = [0,0,0,0,0,0,0]
      let monthlySale = [0,0,0,0,0]
      for (let i=0; i < response.length;i++){
          console.log('for weekly',response[i].createdAt)
          if ( new Date(response[i].createdAt).getMonthWeek() >= new Date().getMonthWeek()){
            weeklySale[new Date(response[i].createdAt).getDay() ] += response[i].ordersTotal
          }
          
          if (new Date().getMonth() == new Date(response[i].createdAt).getMonth()){
            monthlySale[new Date(response[i].createdAt).getMonthWeek()-1] += response[i].ordersTotal
          }

          let x = { id: response[i]._id, name: response[i].name, phone: response[i].phone,time: response[i].createdAt.split("T")[0], orders: response[i].orders,ordersTotal:response[i].ordersTotal}
          rows.push(x)
        }
        setdata(rows)
        setweeklySales(weeklySale)
        setmonthlySales(monthlySale)
        setisloading(false)
      }
      fetchApi()
    }, [])

    const chartData = {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'Sales this week',
          data: weeklySales,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };

    const Bardata = {
      labels: ['1st week', '2nd week', '3rd week', '4th week', '5th week'],
      datasets: [
        {
          label: 'Sales this month',
          data: monthlySales,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    
    
    return (
        <div >
          <div className={S.chart_container}>
            <div className={S.chart}>
              <Line data={chartData} options={options} />
            </div>
            <div className={S.chart}>
              <Bar data={Bardata} options={options} />
            </div>
          </div>
          <h1 className={S.heading}>Sales</h1> 
          <div className={S.sales_container}>
          {
            data.map((d)=>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore/>} >
              <div className={S.summary}>
              <span>
                <h4>Purchased At</h4>
                {d.time}
              </span>
              <span>
                <h4>Name</h4>
                {d.name}
              </span>
              <span>
              <h4>Phone</h4>
              {d.phone}
              </span>
              <span>
              <h4>Order total</h4>
              {d.ordersTotal}
              </span>
              </div>
              </AccordionSummary>
              <AccordionDetails className={S.Accordion_details}>
                <div className={S.detail_container}>   
                <h4>Medicine purchased</h4>
                <div className={S.detail}>
                { d.orders.map((order)=>
                  <Chip variant="outlined" label={`${order.name}  x${order.quantity}`}/>)}
                </div>
                </div>
              </AccordionDetails>
            </Accordion>
            )
          }
          </div>
        </div>
    )
}
