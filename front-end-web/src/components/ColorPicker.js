// import { SketchPicker } from 'react-color';
import { useRef } from 'react';
import styles from 'styles/ColorPicker.module.css';

function ColorPicker (props) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    return (
    <div className={styles.colorPicker}>
        {/* <div className={styles.addColor}>
            
        </div> */}
        {/* <div className={styles.myColor}> */}
            <button 
            className={`${styles.btns} ${styles.addBtn}`}
            type='button'
            ></button>
            <button 
            className={styles.btns} 
            type='button'
            style={{backgroundColor:'#99C0F6'}}
            ref={ref1}
            onClick={(e)=>{
                e.preventDefault();
                props.onChangeColor(ref1.current.style.backgroundColor);
            }}
            ></button>
            <button 
            className={styles.btns} 
            type='button'
            // style={{backgroundColor:'#F699CB', border:props.IsBorder}}
            style={{backgroundColor:'#F699CB'}}
            ref={ref2}
            onClick={(e)=>{
                e.preventDefault();
                props.onChangeColor(ref2.current.style.backgroundColor);
            }}
            ></button>
            <button 
            className={styles.btns} 
            type='button'
            style={{backgroundColor:'#D3F699'}}
            ref={ref3}
            onClick={(e)=>{
                e.preventDefault();
                props.onChangeColor(ref3.current.style.backgroundColor);
            }}
            ></button>
            <button 
            className={styles.btns} 
            type='button'
            style={{backgroundColor:'#F6ED99'}}
            ref={ref4}
            onClick={(e)=>{
                e.preventDefault();
                props.onChangeColor(ref4.current.style.backgroundColor);
            }}
            ></button>
            <button 
            className={styles.btns} 
            type='button'
            style={{backgroundColor:'#B199F6'}}
            ref={ref5}
            onClick={(e)=>{
                e.preventDefault();
                props.onChangeColor(ref5.current.style.backgroundColor);
            }}
            ></button>
            <button 
            className={styles.btns} 
            type='button'
            style={{backgroundColor:'#F6BA99'}}
            ref={ref6}
            onClick={(e)=>{
                e.preventDefault();
                props.onChangeColor(ref6.current.style.backgroundColor);
            }}
            ></button>
        {/* </div> */}
    </div>
)
}



export default ColorPicker;
