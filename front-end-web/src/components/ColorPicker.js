import { ChromePicker } from 'react-color';
import { useState } from 'react';
import { useRef } from 'react';
import styles from 'styles/ColorPicker.module.css';

function ColorPicker (props) {
    const colorRef = useRef([]);
    const colors = ['#99C0F6', '#F699CB', '#D3F699', '#F6ED99', '#B199F6', '#F6BA99']
    const colorBtns = colors.map((color, index) => 
    <button
    key={index}
    className={styles.btns} 
    type='button'
    style={{backgroundColor: color}}
    ref={thisRef => colorRef.current[index] = thisRef}
    onClick={(e)=>{
        e.preventDefault();
        props.onChangeColor(colorRef.current[index].style.backgroundColor);
    }}></button>)

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState('#fff');
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };
    const handleClose = () => {
        setDisplayColorPicker(false);
    };
    const handleChange = (color) => {
        setColor(color.rgb);
    };

    
    
    return (
    <div className={styles.colorPicker}>
        <button 
        className={`${styles.btns} ${styles.addBtn}`} 
        type='button'
        style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}
        onClick={ handleClick }>
        </button>
        { displayColorPicker ? <div className={ styles.popover }>
        <div className={ styles.cover } onClick={ handleClose }/>
        <ChromePicker 
        color={color}
        onChange={ handleChange } />
        </div> : null }
        {colorBtns}
    </div>
    )
}



export default ColorPicker;
