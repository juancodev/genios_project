import { User } from 'firebase/auth'
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

interface UserAuth extends User {
  fullName: string;
  email:string;
}

export const useUserAuth = create()(
  persist(
    (set) => ({
      user: {
        fullName: '',
        email: '',
      },
      fetchUserRegister: (fullName: string ,userData: UserAuth)  => {
        set((state: UserAuth) => ({
          ...state,
          user :{
            fullName,
            email: userData.email,
          }
        }))
      },
      logout: () => {
        set((state: UserAuth) => ({
          ...state,
          user: {
            fullName: '',
            email: ''
          }
        }))
      }
    }),
    {
      name: 'user-auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)