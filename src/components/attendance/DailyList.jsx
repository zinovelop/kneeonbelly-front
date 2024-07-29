import './list.css'
import {useEffect, useState} from "react";
import {getMembers} from "./api/AttandanceService";

const drawGaru = (stripe) => {
    const result =[];
    for (let i =0; i<stripe; i++) {
        result.push(
            <div key={i} className={'stripe'}></div>
        )
    }
    return result
}


function DailyList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getMembers().then(response => {
            console.log(response.data);
            setUsers(response.data)
        });
    }, []);
    return (
        <div className={'container-items'}>
            <div className={'at-box'}>
                <div>오늘의 출석</div>
                <div className={'at-list'}>
                    <ul>
                        {users.map(user => {
                            return (
                                <li key={user.id}>
                                    <div className={'at-list-item'}>
                                        <div className={`belt ${user.grade.toLowerCase()}`}>{user.name}</div>
                                        <div className={user.grade==='BLACK'?'grau-red':'grau'}>
                                            {drawGaru(user.grau)}
                                        </div>
                                        <div className={'date-time'}>17시 34분</div>
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