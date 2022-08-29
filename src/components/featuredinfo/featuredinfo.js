import React from 'react'
import S from './style.module.css'

import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

export default function Featuredinfo(props) {
    console.log(props)
    return (
        <>
        <div className={S.featured}> 
            <div className={S.featured_item}>
                <span>Weekly Sale</span>
                <div className={S.item_container}>
                    <span className={S.item_content}>₹{props.weeksale}</span>
                    <span className={S.item_subcontent}>{Math.abs(props.weeksale-props.prevweeksale)} {props.weeksale-props.prevweeksale < 0? <ArrowDownward className={S.featured_icon_d}/> : <ArrowUpward className={S.featured_icon_u}/>}</span>
                </div>
                <span className={S.featured_sub}>Compared to last week</span>
            </div>
            <div className={S.featured_item}>
                <span>Monthly Sale</span>
                <div className={S.item_container}>
                    <span className={S.item_content}>₹{props.monthsale}</span>
                    <span className={S.item_subcontent}>{Math.abs(props.monthsale - props.prevmonthsale)} {props.monthsale - props.prevmonthsale < 0? <ArrowDownward className={S.featured_icon_d}/> : <ArrowUpward className={S.featured_icon_u}/>}</span>
                </div>
                <span className={S.featured_sub}>Compared to last month</span>
            </div>
            <div className={S.featured_item}>
                <span>Total Sale</span>
                <div className={S.item_container}>
                    <span className={S.item_content}>₹{props.totalsale}</span>
                </div>
                <span className={S.featured_sub}>The grand total of all sales</span>  
            </div>
        </div>
        
        <div className={S.featured}> 
            <div className={S.featured_item}>
                <span>Total Medicines</span>
                <div className={S.item_container}>
                    <span className={S.item_content}>{props.totalmed}</span>
                </div>
                <span className={S.featured_sub}>Number of medicines in stock</span>
            </div>
            <div className={S.featured_item}>
                <span>Expired Medicines</span>
                <div className={S.item_container}>
                    <span className={S.item_content}>{props.expiredmed}</span>
                </div>
                <span className={S.featured_sub}>Medicines expired or about to expire</span>
            </div>
            <div className={S.featured_item}>
                <span>Out of stock</span>
                <div className={S.item_container}>
                    <span className={S.item_content}>{props.outofstockmed}</span>
                </div>
                <span className={S.featured_sub}>Medicines about to be out of stock</span>
            </div>
        </div>
        </>
    )
}
