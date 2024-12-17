import './tour.css'
import Accordion from './accordion'

const Tour = ()=>{
    return (
        <>
        <div className="container">
            <p className="mainTitle">Россия тур 2025</p>
            <div className="txtTitles">
                <p className="txtTitle txtTitle_1">дата</p>
                <p className="txtTitle txtTitle_2">город</p>
                <p className="txtTitle txtTitle_3">место</p>
                <p className="txtTitle txtTitle_4">время</p>
            </div>
           <div className="tourAccordions">
            <Accordion date="22.09.2022" city="Москва" place="Москва" time="19:00"></Accordion>
            <Accordion date="22.09.2022" city="Москва" place="Москва" time="19:00"></Accordion> 
           </div>
        </div>
        </>
    )
}
export default Tour