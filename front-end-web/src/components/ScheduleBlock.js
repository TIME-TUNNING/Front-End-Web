// import { useState } from 'react';

const ScheduleBlock = (props) => {
    const styles = {
        width: '1000px',
        height: '100px',
        marginTop: '30px',
        backgroundColor: 'teal'
    }
    // console.log(props.schedule.title);
    
    return (
        <div 
        style={styles}>
            {props.schedule.title}
        </div>
    )
}

export default ScheduleBlock;
