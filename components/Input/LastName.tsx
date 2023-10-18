export default function LastName(){
    return(
        <input
            name = "lastName"
            type = "text"
            id = "lastName"
            onChange = {(e)=>{
                (e.target.value)
            }}
        />
    )
}