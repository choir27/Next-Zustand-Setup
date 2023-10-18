"use client"
import {useStore} from "../../states/Store"

export default function FirstName(){

    const firstName = useStore((state)=>state.User.firstName);
    const setFirstName = useStore((state)=>state.User.setFirstName);

    return(
        <input
            name = "firstName"
            type = "text"
            id = "firstName"
            onChange = {(e)=>{
                e.preventDefault();
                setFirstName(e.target.value);
            }}
        />
    )
}