import { useState } from "react"

export default function SearchProduct({ onSearch }) {
    const [search, setSearch] = useState("")
    
    const handleSearch = (e) => {
        e.preventDefault()
        if (onSearch) {
            onSearch(search)
        }
    }
    
    const handleInputChange = (e) => {
        const value = e.target.value
        setSearch(value)
        // Real-time search
        if (onSearch) {
            onSearch(value)
        }
    }
    
    return (
        <div className="SearchProduct">
            <input 
                type="text" 
                placeholder="Search Now..." 
                value={search}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}><i className="fas fa-search"></i></button>
        </div>
    )
}