import {useEffect, useState} from "react";
import {doAttendance} from "../../api/AttandanceService";
import { useStContext } from "../../constances/Context";

function KeyPad() {
    const [inputNum, setInputNum] = useState('');
    const context = useStContext();
    const [message, setMessage] = useState('')

    function buttonClick(event) {
        const buttonValue = event.target.innerHTML;
        setInputNum(inputNum+buttonValue);
    }

    function clearBtn() {
        setInputNum('');
    }

    function deleteBtn() {
        setInputNum(prevText => prevText.slice(0, -1));
    }

    useEffect(() => {
        if(inputNum.length===4){
            setTimeout(() =>{

                const param = {
                    number: inputNum,
                }
                doAttendance(param)
                .catch(error => {
                    setMessage(error.response.data.message)
                    setTimeout(() => {setMessage()}, 3000)
                })
                context.todayCntUp();
                clearBtn();
            }, 100);
        }
    }, [inputNum, context]);
    


    return (
        <>
            <div className="input-container">
                <div className="input-box"></div>
                <div className="input-box"></div>
                <div className="input-box"></div>
                <div className="input-box"></div>
                <input type="text" className="inputText" value={inputNum} maxLength="3" readOnly/>
            </div>
            <div>{message}</div>
            <div className="keypad">
                <button onClick={buttonClick}>1</button>
                <button onClick={buttonClick}>2</button>
                <button onClick={buttonClick}>3</button>
                <button onClick={buttonClick}>4</button>
                <button onClick={buttonClick}>5</button>
                <button onClick={buttonClick}>6</button>
                <button onClick={buttonClick}>7</button>
                <button onClick={buttonClick}>8</button>
                <button onClick={buttonClick}>9</button>
                <button onClick={clearBtn}>정정</button>
                <button onClick={buttonClick}>0</button>
                <button onClick={deleteBtn}>⌫</button>
            </div>
        </>
    )
}

export default KeyPad;