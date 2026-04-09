import Instance from "../libs/axios"
import { useEffect, useState } from "react"


export default function Products() {

    const Rp = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    const [getData, setGetData] = useState("")

    useEffect(() => {
        Instance.get("/products").then((res) => {
            setGetData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const products = getData.data ? getData.data : []
    return (
        <div className="Products">
            {
                products.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="desc">
                                <p className="id">Produk ke: <span>{item.id}</span></p>
                                <p>{Rp.format(item.price)}</p>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}