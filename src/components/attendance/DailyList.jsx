import './list.css'
import {useEffect, useState} from "react";
import {getTodayAttendance} from "../../api/AttandanceService";
import { useStContext } from '../../constances/Context';

const drawGaru = (stripe) => {
    const result =[];
    for (let i =0; i<stripe; i++) {
        result.push(
            <div key={i} className={'stripe'}></div>
        )
    }
    return result
}

const formatDate = (datetime) => {
    const date = new Date(datetime);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // hh-mm-ss 형식으로 변환
    return `${hours}:${minutes}:${seconds}`;
}

function DailyList() {

    const [todayAtt, setTodayAtt] = useState([]);
    const context = useStContext();


    useEffect(() => {
        getTodayAttendance().then(response => {
            setTodayAtt(response.data);
        });
    }, [context.todayCnt]);

    return (
        <div className={'container-items'}>
            <div className={'at-box'}>
                <div>오늘의 출석 : <span>{context.todayCnt}명</span></div>
                <div className={'at-list'}>
                    <ul>
                        {todayAtt.map(att => {
                            return (
                                <li key={att.id}>
                                    <div className={'at-list-item'}>
                                        <div className={`belt ${att.member.grade.toLowerCase()}`}>{att.member.name}</div>
                                        <div className={att.member.grade==='BLACK'?'grau-red':'grau'}>
                                            {drawGaru(att.member.grau)}
                                        </div>
                                        <div className={'date-time'}>{formatDate(att.attendanceTime)}</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DailyList;