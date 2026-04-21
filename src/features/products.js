

'use client';
import { useProducts } from "@/hooks/useProducts";


export default function Products(){

    const {data, isLoading, isError, error} = useProducts();
if (isLoading) return <div>Loading...</div>
if (isError) return <div>{error.message}</div>
   
return(

    <div className="" style={{display:'flex'}}>

        {data?.map((product) =>{
            return(<div key={product.id}>
                    {product.title}
                    {product.description}
                </div>)
            
        })}
    </div>
)

}