import Profile from '../assets/images/Profile.png'
import '../assets/css/Home.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sosmed from '../components/layouts/sosmed'
import Products from '../components/layouts/products'
import SearchProduct from '../components/libs/searchProduct'

export default function Index() {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <div className='Index'>
            <img src={Profile} className='profile' />
            <h1 className='name'>Youra No AI</h1>
            <Link to="https://aryadanuwarta-youranoais-projects.vercel.app/" className='Link'>Portofolio</Link>
            <Sosmed />
            <SearchProduct onSearch={handleSearch} />
            <Products searchTerm={searchTerm} />
        </div>
    )
}