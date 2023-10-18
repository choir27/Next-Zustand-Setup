import {produce} from "immer"
import {create} from "zustand"

type State = {
    firstName: string,
    lastName: string,
}

type Action = {
    setFirstName: (e:string) => void,
    setLastName: (e:string) => void
}

type User = {
    User: State & Action
}
        
export const useStore = create<User>(
    (set)=>({
        User:{
            firstName: "",
            setFirstName: (firstName:string) => 
                set(
                    produce(
                        (state)=>{
                            state.User.firstName = firstName
                        }
                    )
                ),
            lastName: "",
            setLastName: (lastName:string) => 
                set(
                    produce(
                        (state)=>{
                            state.User.lastName = lastName
                        }
                    )
                )
            }
    })
);
