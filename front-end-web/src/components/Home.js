import styles from 'styles/Home.module.css';
import Frame from 'icons/Frame.png'
import Frametop from 'icons/Frametop.png'
import Vector from 'icons/Vector.png'
function Home(props) {

    return(
    <div>
        <div className={styles.vectordiv}>
            <img className={styles.Vector} src={Vector}/>
        </div>
        <div className={styles.homediv}>
            <span className={styles.timetuning}>
                타임튜닝이란?
            </span>
            <span className={styles.timeex}>
                팀원들과 함께하는<br></br>  
                가장 효율적인 일정 관리
            </span>
        </div> 
        <div className={styles.frametopdiv}>
            <img className={styles.Frametop} src={Frametop}/>
        </div>
        <div className={styles.framediv}>
            <img className={styles.Frame} src={Frame}/>
        </div>
        
        
    </div>
    

    )
};
    

export default Home;