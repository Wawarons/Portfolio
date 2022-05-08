import react from "react";
import { Link } from "react-router-dom";

const CircleLink = ({circleValue, url, id, color}) => {
    return (
        <svg width = {`${circleValue*2}px`} height = {`${circleValue*2}px`}>
            <Link to = {`/${url}`}>
                  <circle className = "circleLink" id = {`circle_${id}`} cx = {`${circleValue}px`} cy = {`${circleValue}px`} r = {`${circleValue}px`} fill = {color}></circle>
            </Link>
          </svg>
    )
}

export default CircleLink