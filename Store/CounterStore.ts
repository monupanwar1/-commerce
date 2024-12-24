import {create} from 'zustand';
import {createJSONStorage,persist} from "zustand/middleware"


interface countState {
    count:number;
    increment:()=>void;
    decrease:()=>void;
    reset:()=>void;
}


const UseCounterStore =create<countState>()(
    persist(
        (set)=>({
            count:0,
            increment:()=>set((state)=>({count:state.count+1})),
            decrease:()=>set((state)=>({count:state.count>0 ? state.count-1 :0})),
            reset: () => set({ count: 0 }),


        }),
        {
            name:"counter-storage"
        }
    )
);

export default UseCounterStore;
