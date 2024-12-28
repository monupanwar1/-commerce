import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export interface User {
  id: number
  name: string
  email: string
  age: number
  image: string
  course: string
  role: string
}



interface AuthStore {
    user :User|null
    login:(email:string,password:string)=>Promise<boolean>
    logout:()=>void;

}


const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    image: '/placeholder.svg?height=128&width=128',
    course: 'Computer Science',
    role: 'Student',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 28,
    image: '/placeholder.svg?height=128&width=128',
    course: 'Data Science',
    role: 'Student',
  },
]


export const useAuthStore =create<AuthStore>()(
    persist(
        (set)=>({
            user:null,
            login:async(email:string,password:string)=>{
                const user =users.find((u)=>u.email===email)
                if(user){
                    set({user})
                    return true
                }
                return false
            },
            logout:() =>({user:null}),
        }),
        {
           name: 'auth-storage',

        }
    )
)