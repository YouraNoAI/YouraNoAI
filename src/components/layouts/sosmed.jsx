import Instance from '../libs/axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sosmed() {
    const [getData, setGetData] = useState("")

    useEffect(() => {
        Instance.get("/user").then((res) => {
            setGetData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const account = getData.data ? getData.data : {}
    return (
        <div className="group">
            <Link to={account.tiktok} className='Link'><i className="fab fa-tiktok"></i></Link>
            <Link to={account.instagram} className='Link'><i className="fab fa-instagram"></i></Link>
            <Link to={account.youtube} className='Link'><i className="fab fa-youtube"></i></Link>
            <Link to={account.github} className='Link'><i className="fab fa-github"></i></Link>
        </div>
    )
}