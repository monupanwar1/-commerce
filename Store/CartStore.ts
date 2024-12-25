import {create} from 'zustand';
import {createJSONStorage,persist} from "zustand/middleware"
import { Product } from '@/Types';
import {ProductCard} from '@/components/product-card';


interface CartItems {
  quantity: number;
  id: number;
  title: string;
  price: number;
  image: string; 
}
interface CartState{
    items:CartItems[];
    addToCart:(product:Product)=>void;
    removeFromCart:(Id:number)=>void;
    updateQty:(type:"increment"|"decrememt" ,id:number)=>void;
}


const UseCartStore =create<CartState>()(
    persist(
        (set,get)=>({
            items:[],


            addToCart:(product)=>{
                const existingProduct =get().items.find((item)=>item.id===product.id
            );
            set({
                items:existingProduct ?get().items:[
                    ...get().items,{
                  quantity: 1,
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image[0], 
                    }
                ]
            });
            if(existingProduct){
                toast.error("Already present")
            }else{
                toast.success("Product add succesfully")
            }
            },
            
            removeFromCart:(id)=>{
                set({
                    items:get().items.filter((item)=>item.id !==id)

            });
            toast.success("items removed")
        },

        updateQty:(type,id)=>{
            const item =get().items.find((items)=>item.id ==id);
            if(!item){
                return;
            }
            if(item.quantity===1 && type ==="decrememt"){
                get().removeFromCart(id);
            }else{
                item.quantity=type==="decrememt" ? item.quantity-1:item.quantity+1;
                set({
                    items:[...get().items],
                })
            }

        }
            


        }),
        {
            name:"Cart-storage"
        }
    )
);

export default UseCartStore;
