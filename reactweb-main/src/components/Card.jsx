import React from "react";
import "./Card.css";

function Card(props){
    return(
        <>
                <div className='card'>
                    <img src={props.imgsrc} alt='tamilnadu pic ' className='card-img' />
                    <div className='card-info'>
                        <h3 className='card-title'>{props.place}</h3>
                        <p className='title-descp'>{props.famous}</p>
                        <div className="btn">
                           <button><a href={props.link} className="anchor">Click</a></button>
                        </div>
                        {/* <a href={props.link}>Click</a> */}
                        {/* <a href={props.p}>Just</a> */}
                        {/* <div className="btn"> 
                            {/* <button>Click</button> */}
                            {/* <a href={props.link}>Click</a> */}
                            {/* <NavLink to={props.link}>Click</NavLink>  */}
                                {/* <a href={props.link} className="anchor">Click</a> */}
                                {/* <Link to={props.link} >Click</Link> */}
                    </div> 
                </div>
                {/* </div> */}
        </>
    );
}

export default Card;