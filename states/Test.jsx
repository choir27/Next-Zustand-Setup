import {create} from "zustand"
import {produce} from "immer"

export const useStore = create(
    (set)=>({
        User:{
            firstName: "",
            setFirstName: (firstName) => 
                set(
                    produce(
                        ()=>({
                            firstName: firstName
                        })
                    )
                ),
            lastName: "",
            setLastName: (lastName) => 
                set(
                    produce(
                        ()=>(({
                            lastName: lastName
                        }))
                    )
                )
            }
    })
);
