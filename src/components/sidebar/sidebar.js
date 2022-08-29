import React from 'react'
import S from './style.module.css'
import Logo from "../../Assets/logo.png"
import {NavLink,useHistory,useLocation} from 'react-router-dom'
import {LineStyle, TrendingUp, PeopleOutline, LocalHospitalOutlined, ReceiptOutlined, ExitToApp} from '@material-ui/icons';


export default function Sidebar() {

    const history = useHistory()
    const loc = useLocation().pathname

    const logout = ()=>{
        localStorage.removeItem("token")
        history.push('/signin')
    }


    return (
        <div className={S.sidebar} style={{display: (loc==='/signin'|| loc ==='/signup')? 'none':'block'}}>

            <img src={Logo} className={S.logo} alt="logo" />
            
            <div className={S.sidebar_menu}>
                <h3>Dashboard</h3>
                <ul>
                    <NavLink to="/" exact activeClassName={S.active}> <LineStyle className={S.icon}/> Home </NavLink>
                    <NavLink to="/sales" activeClassName={S.active}> <TrendingUp className={S.icon}/> Sales </NavLink>
                    <NavLink to="/customers" activeClassName={S.active}> <PeopleOutline className={S.icon}/> Customers </NavLink>
                </ul>
            </div>
            <div className={S.sidebar_menu}>
                <h3>Quick Menu</h3>
                <ul>
                    <NavLink to="/medicines" activeClassName={S.active}> <LocalHospitalOutlined className={S.icon}/> Medicines </NavLink> 
                    <NavLink to="/billing" activeClassName={S.active}> <ReceiptOutlined className={S.icon}/> Billing </NavLink>
                </ul>
            </div>
            <div className={S.sidebar_menu}>

                    <span className={S.logout} onClick={logout}> <ExitToApp className={S.icon}/> Logout</span>
            </div>
        </div>
    )
}
