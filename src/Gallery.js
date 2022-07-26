import React,{useState} from "react";
import "./Gallery.css"


function Gallery (props) {
    
    const [itemCount, setItemCount] = useState(3)
    
    function handleItemCountChange (event) {
        setItemCount(event.target.value)
    }
    
    return (
        <div>
            <div className="image-number">
                <input type="number" value={itemCount} onChange={handleItemCountChange} />
            </div>
            {props.images.map((url, index) => {
                if (index < itemCount) {
                    return <img key={index+"Gallery"} src={url} />
                } else {
                    return ""
                }
            })}
        </div>
    )
}

export default Gallery