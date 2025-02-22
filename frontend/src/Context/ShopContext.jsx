import { createContext, use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const ShopContext = createContext()

const ShopContextProvider = (props)=>{
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl= import.meta.env.VITE_BACKEND_URL;
    const [search , setSearch] = useState('')
    const [showSearch , setShowSearch] = useState(false)
    const [cart , setCart] = useState({});
    const navigate = useNavigate();

    const [products , setProducts] = useState([]);
    const [token , setToken] = useState("")


    const addToCart =async (itemId , size)=>{

        if(!size){
            toast.error("Select Product Size");
            return;
        }

        let cartItem = structuredClone(cart)
        if(cartItem[itemId]){
            if(cartItem[itemId][size]){
                cartItem[itemId][size] +=1
            }
            else{
                cartItem[itemId][size] = 1
            }
        }else{
            cartItem[itemId] = {} 
            cartItem[itemId][size] = 1 
        }

        setCart(cartItem)
        if(token){
            try {
                await axios.post(backendUrl + "/api/cart/add" , {itemId , size} , {headers:{token}})
                
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }

    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cart){
            for(const item in cart[items]){
                try {
                    if(cart[items][item] > 0){
                        totalCount += cart[items][item];
                    } 
                } catch (error) {
                    
                }
                
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId , size , quantity)=>{
        const cartData = structuredClone(cart);
        cartData[itemId][size] = quantity;
        setCart(cartData)
        if(token){
            try {
                await axios.post(backendUrl + "/api/cart/update" , {itemId , size , quantity} , {headers:{token}})
                
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    const getUserCart = async (token) =>{
        try {
           const response =  await axios.post(backendUrl + "/api/cart/get" ,{}, {headers:{token}})
           if(response.data.success){
           
            setCart(response.data.cartData)
           }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }

    }

    

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cart){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cart[items]){
                try {
                    if(cart[items][item] > 0){
                        totalAmount += itemInfo.price * cart[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount
    }

    console.log("Backend URL:", backendUrl);


   const getProductData = async ()=>{
    try {
        const response = await axios.get(backendUrl + "/api/product/list");
        if(response.data.success){

            setProducts(response.data.products)
        }else{
            toast.error(response.data.message)
        }
    } catch (error) {

        console.log(error)
        toast.error(error.message)
        
    }
   }

   useEffect(()=>{
    getProductData()
   } , [])

   useEffect(()=>{
    if(!token && localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        getUserCart(localStorage.getItem("token"))
    }
   } , [])

  

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch,
        showSearch , setShowSearch,
        cart ,setCart, addToCart , getCartCount,
        updateQuantity , getCartAmount,
        navigate , backendUrl , token , setToken
    }

    return(
        <ShopContext.Provider value={value}>

            {props.children}

        </ShopContext.Provider>
    )
}

export default ShopContextProvider;