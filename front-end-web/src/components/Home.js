import styles from 'styles/Home.module.css';
import Frame from 'icons/Frame.png'
import Frametop from 'icons/Frametop.png'
import Vector from 'icons/Vector.png'
import logoimg from 'icons/logo3.png'
import logo from 'icons/logo2.png'
import twopage from 'icons/2page.png'
import threepage from 'icons/3page.png'
import fourpage from 'icons/4page.png'
// import smile from 'icons/smile.png'
// import circle from 'icons/circle.png'
// import box from 'icons/box.png'
// import clockhandle from 'icons/clockhandle.png'
import logoFrame from 'icons/logoframe.png'
import Slider from 'react-slick';
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props) {
    const StyledSlider = styled(Slider)`
        .slick-list {
            position: relative;
            right: 455px;
            width: 1900px;
            margin: 0 auto;
            height: auto;

        }
        
        .slick-dots {
            bottom: 200px;
        }

        .slick-dots button:before,
        .slick-dots li button:before {
            color: #4B77F2;
        }

        .slick-prev::before,
        .slick-next::before {
            opacity: 0;
            display: none;
        }
    `

    const setting = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        prevArrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
    <StyledSlider {...setting}>
        {/* 1page */}
        <div className={styles.maindiv}>
            <div className={styles.vectordiv}>
                <img className={styles.Vector} src={Vector} alt='img1'/>
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
                <img className={styles.Frametop} src={Frametop} alt='img2'/>
            </div>
            <div className={styles.framediv}>
                <img className={styles.Frame} src={Frame} alt='img3'/>
            </div>
        </div>
        {/* 2page */}
        <div className={styles.two}>
            <div>
                <img className={styles.logoFrame} src={logoFrame} alt='img1'/>
            </div>    
            <img className={styles.twomain} src={twopage} alt='img1'/>
            <div>
                <img className={styles.logocircle} src={Frametop} alt='img1'/>
            </div>
        </div>
        {/* 3page */}
        <div>
            <div>
                <img className={styles.logocircle3} src={Frametop} alt='img1'/>
            </div>
            <img className={styles.threemain} src={threepage} alt='img1'/>
            <div className={styles.logoimgdiv}>
                <img className={styles.logoimg} src={logoimg} alt='img1'/>
            </div>
        </div>
        {/* 4page */}
        <div>
            <div className={styles.logoimgdiv}>
                <img className={styles.logo} src={logo} alt='img1'/>
            </div>
            <img className={styles.fourmain} src={fourpage} alt='img1'/>
            <div>
                <img className={styles.logocircle3} src={Frametop} alt='img1'/>
            </div>
        </div>
    </StyledSlider>
    


    // <div>
    //     <div>
    //         <img className={styles.logoFrame} src={logoFrame} alt='img1'/>
    //     </div>
    //     <div className={styles.text}>
    //         <span>
    //             <b>여러 사람들과 일정 조율</b>을 위해<br></br>
    //             에너지를 소모해보는 경험, 있지 않으신가요?
    //         </span>
    //     </div>
    //     <div className={styles.clockbox}>
    //         <img className={styles.box} src={box} alt='img2'/>
    //         <div className={styles.clock}>
    //             <img src={circle} alt='img3'/>
    //             <img className={styles.circlehandle} src={clockhandle} alt='img4'/>
    //         </div>
    //         <div>
    //             <span className={styles.timesaving}>
    //                 <b>시간 절약</b><br></br>
    //             </span>
    //             <span className={styles.timesaving2}>
    //                 <b>일정조율에 낭비되는 시간,<br></br>
    //                 타임튜닝이 줄여볼게요</b>
    //             </span>
    //         </div>
    //     </div>
    //     <div className={styles.clockbox}>
    //         <img className={styles.box} src={box} alt='img2'/>
    //         <div className={styles.clock}>
    //             <img src={circle} alt='img3'/>
    //             <img className={styles.circlehandle} src={clockhandle} alt='img4'/>
    //         </div>
    //         <div>
    //             <span className={styles.timesaving}>
    //                 <b>시간 절약</b><br></br>
    //             </span>
    //             <span className={styles.timesaving2}>
    //                 <b>일정조율에 낭비되는 시간,<br></br>
    //                 타임튜닝이 줄여볼게요</b>
    //             </span>
    //         </div>
    //     </div>
    // </div>

//2page


//3page
    
    







    )

    

};

export default Home;
