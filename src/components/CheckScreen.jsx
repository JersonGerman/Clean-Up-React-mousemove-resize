import { useEffect, useState } from "react";


const CheckScreen = ()=>{

    const [width, setWidth] = useState(window.innerWidth);
    // const [widthPosition, setWidthPosition] = useState(0);
    const [background, setBackground] = useState('#00FF00');

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth)

        window.addEventListener('resize', changeWidth);

        return () => window.removeEventListener('resize',changeWidth);
    }, []);


    useEffect(()=>{
        const checkWidthPosition = (e) => {
            if(width / 2 > e.x){
                setBackground('#00FF00');
            }else{
                setBackground('#0000FF');
            }
        }
        window.addEventListener('mousemove', checkWidthPosition);
        return ()=> window.removeEventListener('mousemove',checkWidthPosition);
    },[])


    const styles = {
        backgroundColor: background,
        color: '#FFFFFF',
        height:'50vh'
    }


    return (
        <div style={styles}>
            <p>Pantalla Grande</p>
            <div>
                {width}
                {/* <p>position: {widthPosition}</p> */}
            </div>
        </div>
    )
}

export default CheckScreen;