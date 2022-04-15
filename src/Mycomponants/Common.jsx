import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
    <section id="Header">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-12 hero-text order-md-0 order-1 px-5 mb-5" style={{marginTop:"10%"}}>
                                    <h1 className="txt mt-5">{props.name}</h1>
                                    <p className="para-txt">We Are The Team Of <span className="bold-style">Professional Developers</span></p>
                                    <NavLink  to={props.btnlink} className="btn-style btn-primary rounded-pill btn-success py-2 btn"> {props.btnname}</NavLink>
                                </div>

                                <div className="col-md-6 col-12 order-md-1 order-1">
                                    <figure>
                                        <img src={props.imgsrc}alt="hero-section_image" clas="img-rounded" height="500" width="600"/>
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}

export default Common;