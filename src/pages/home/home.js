import React, { useEffect, useState } from 'react'
import S from './style.module.css'

import Featuredinfo from '../../components/featuredinfo/featuredinfo';

import { Line } from 'react-chartjs-2'; 

export default function Home() {
    const [isloading, setisloading] = useState(true)

    const [medicine, setmedicine] = useState()
    const [totalmed, settotalmed] = useState()
    const [expiredmed, setexpiredmed] = useState(0)
    const [outofmed, setoutofmed] = useState(0)
    
    const [sales, setsales] = useState([])
    const [weeksale, setweeksale] = useState()
    const [prevweeksale, setprevweeksale] = useState()
    const [monthsale, setmonthsale] = useState()
    const [prevmonthsale, setprevmonthsale] = useState()
    const [totalsale, settotalsale] = useState()

    const [chartTotalSale, setchartTotalSale] = useState([])
    const [chartTotalLabel, setchartTotalLabel] = useState([])

    Date.prototype.getMonthWeek = function(){
        var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
        return Math.ceil((this.getDate() + firstDay)/7);
      }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        const fetchApi= async() => {
            const requestOptions = {
                headers: { "accepts":"application/json" , 'Content-Type': 'application/json' , 'authToken': JSON.parse(localStorage.getItem("token"))},
                method: 'GET'
            };

            let salesResponse = await fetch("https://pharmacy-backend-dex.herokuapp.com/api/sale", requestOptions);
            salesResponse = await salesResponse.json()  
            setsales(salesResponse)
            
            let responseM = await fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine", requestOptions);
            responseM = await responseM.json()
            setmedicine(responseM)
            settotalmed( responseM.length)
            setexpiredmed(responseM.filter((med)=> new Date(med.expiry) < new Date(new Date().setDate(new Date().getDate() - 60))))
            setoutofmed(responseM.filter((med)=> med.quantity <= 10))
            
            console.log('yaha se chala',responseM)
            setSales(salesResponse)
        }
        fetchApi()
        

    }, [])

    const setSales = (sales)=>{
        let weeks = 0
        let months = 0
        let totals = 0

        let prevweeks = 0
        let prevmonths = 0

        let charttoalsale = []
        let chartlabel = []
        for(let i=0; i< sales.length; i++){

          if(charttoalsale == 0 ){
            charttoalsale = [0]
            chartlabel = [sales[i].createdAt.split('T')[0]]
          }else{
            if (sales[i-1].createdAt.split('T')[0] !==sales[i].createdAt.split('T')[0]){
              charttoalsale.push(0)
              chartlabel.push(sales[i].createdAt.split('T')[0])
            }
          }

          // setting total sales for chart
          charttoalsale[charttoalsale.length-1] += parseInt(sales[i]?.ordersTotal)
            
          if (new Date().getMonth()-1 == new Date(sales[i].createdAt).getMonth())
            prevmonths += parseInt(sales[i]?.ordersTotal) 

          if (new Date().getMonth() == new Date(sales[i].createdAt).getMonth()){
            months += parseInt(sales[i]?.ordersTotal) 
            if (new Date().getMonthWeek() - 1 == new Date(sales[i].createdAt).getMonthWeek())
              {prevweeks += parseInt(sales[i]?.ordersTotal) }
            else if (new Date().getMonthWeek() == new Date(sales[i].createdAt).getMonthWeek())
              {weeks += parseInt(sales[i]?.ordersTotal) }
          }

          totals += parseInt(sales[i]?.ordersTotal) 
          console.log('loop',weeks,prevweeks, months,prevmonths,totals)                
        }

        console.log(charttoalsale)
        console.log(chartlabel)
        console.log("end",weeks,prevweeks, months,prevmonths,totals)   
        setweeksale(weeks)
        setprevweeksale(prevweeks)
        setmonthsale(months) 
        setprevmonthsale(prevmonths)
        settotalsale(totals)

        setchartTotalSale(charttoalsale)
        setchartTotalLabel(chartlabel)
        

        setisloading(false)
    }

    const chartData = {
        labels: chartTotalLabel,
        datasets: [
          {
            label: 'Total sales',
            data: chartTotalSale,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
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
        <div className={S.home}>
          <h1 className={S.heading}>Dashboard</h1>
            {!isloading && <Featuredinfo totalmed = {totalmed} expiredmed = {expiredmed.length} outofstockmed={outofmed.length} weeksale={weeksale} prevweeksale={prevweeksale} monthsale={monthsale} prevmonthsale={prevmonthsale} totalsale={totalsale} />}
            
          <h1 className={S.heading}>Analytics</h1>
            <div className={S.lineChart}>
              <Line data={chartData} options={options} height={110} />
            </div>

        </div>
    )
}
