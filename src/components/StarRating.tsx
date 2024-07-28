import { FaStar } from "react-icons/fa"
import { useState } from "react"

export default function StarRating({numStars = 5}){

    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

    const active = {
        color: "#FFD700"
    }
    const inactive = {
        color: "#000000"
    }

    function handleClick(num: number){
        setRating(num)
    }
    
    function handleMouseEnter(num: number){
        setHoverRating(num)
    }

    function handleMouseLeave(){
        setHoverRating(rating)
    }

    return(
        <div style={{
            height:"100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {[...Array(numStars)].map((_, index)=>{
                index++
                return <FaStar
                key={index} 
                size={40} 
                style={index <= rating || index <= hoverRating? active: inactive}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                />
            })}
        </div>
    )
}