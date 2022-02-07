import { useState } from 'react';
import converter from './Converter';

export default function ShowColor() {
    const [hexValue, setHexValue] = useState('#ffffff');
    const [rgbValue, setRgbValue] = useState('rgb(255,255,255)');

    const handleChange = ({target}) => {
        const hex = target.value;
        setHexValue(hex);

        if (hex.length < 7) {
            setRgbValue('')
            return;
        }

        const hexConvert = converter(hex);
        setRgbValue(hexConvert ? `rgb(${hexConvert.r}, ${hexConvert.g}, ${hexConvert.b})` : 'Ошибка');
    }

    return (
        <div className='converter-color' style={{backgroundColor: rgbValue}}>
            <form className='converter-form' onSubmit={(event) => event.preventDefault()}>
                <input className='converter-input' type="text" value={hexValue} onChange={handleChange} />
                <span className='converter-text'>{rgbValue}</span>
            </form>
        </div>
    )
}