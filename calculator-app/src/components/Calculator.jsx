import CalculatorTitle from "./CalculatorTItle";
import {useState} from 'react';
import OutputScreen from "./OutputScreen";
import Button from "./Button";
const Calculator = () => {
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState('');
    return (
        <div className="display">
            <CalculatorTitle title="Simple Calculator"/>
            <div className="displaying-value">
                <OutputScreen/>
                <div className="button-row">
                    <Button label="clear"/>
                    <Button label="Delete"/>
                    <Button label="."/>
                    <Button label="/"/>
                </div>
                <div className="button-row">
                    <Button label="7"/>
                    <Button label="8"/>
                    <Button label="9"/>
                    <Button label="*"/>
                </div>
                <div className="button-row">
                    <Button label="4"/>
                    <Button label="5"/>
                    <Button label="6"/>
                    <Button label="-"/>
                </div>
                <div className="button-row">
                    <Button label="1"/>
                    <Button label="2"/>
                    <Button label="3"/>
                    <Button label="+"/>
                </div>
                <div className="button-row">
                    <Button label="0"/>
                    <Button label="="/>
                </div>
            </div>
        </div>
    )
}
export default Calculator;