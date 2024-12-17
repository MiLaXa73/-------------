import './tour.css'

const Accordion = (props) => {
    return (
        <>
             <div className="tourAccardion">
                <div className="tourAccardionItem">
                <p className="txtTitle txtTitle_1">{props.date}</p>
                <p className="txtTitle txtTitle_2">{props.city}</p>
                <p className="txtTitle txtTitle_3">{props.place}</p>
                <p className="txtTitle txtTitle_4">{props.time}</p>
                </div>
            </div>
        </>
    )
}
export default Accordion