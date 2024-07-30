import './Attendance.css';
import Keypad from "./Keypad";
import DailyList from "./DailyList";
import MonthlyList from "./MonthlyList";
import ContextProvider from '../../constances/Context';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css'

function Attendance() {
    return (
        <div className="AttendanceApp">
            <Header/>
            <ContextProvider>
                <InputNum/>
            </ContextProvider>
        </div>
    )
}


function InputNum() {
    return (
        <div className="attendance">
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