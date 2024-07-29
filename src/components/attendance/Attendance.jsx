import './Attendance.css';
import Keypad from "./Keypad";
import DailyList from "./DailyList";
import MonthlyList from "./MonthlyList";

function Attendance() {
    return (
        <div className="attendance">
            <InputNum/>
        </div>
    )
}


function InputNum() {
    return (
        <div className="container">
            <DailyList/>
            <div className={'container-items'}>
                <div className="header">
                    <div className="icon">🤙</div>
                    <div className="title">출석</div>
                </div>
                <Keypad/>
            </div>
            <MonthlyList/>
        </div>
    )
}


export default Attendance;