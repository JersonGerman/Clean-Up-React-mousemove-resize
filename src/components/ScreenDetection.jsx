import { useEffect, useState } from "react";

const ScreenDetection = ()=>{

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const changeWidth = (e)=>setWidth(e.target.innerWidth);
        window.addEventListener('resize',changeWidth);
        return ()=>window.removeEventListener('resize',changeWidth);
    },[])

    const styles = {
        backgroundColor:'#F74F2B',
        color: '#FFFFFF',
        height:'50vh'
    }

    return(
        <div style={styles}>
            <p>{width>500?'Pantalla Grande':'Pantalla pequeña'}</p>
            <div>
                {width}
            </div>
        </div>
    );
}
export default ScreenDetection;