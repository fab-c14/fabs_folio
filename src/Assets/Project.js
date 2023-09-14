import React from 'react';
// import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Assets/About.css'
import { Fade } from 'react-reveal';
import 'tachyons'
var Project = ({name,pic,sourceCode,liveLink,desc,picAlt})=>{
    if(pic==="" || pic===" "){
        pic=picAlt // choosing a random picture from web
    }
    return(
        <>
        {/* for now description is not used later we may use it */}
      
            <Row className="w-100">
                <Col>
                <Fade left cascade duration={1500}>
                    <div className='georgia fl w-100'>
                        <h1 className='f2'>{name}</h1>
                        <p>
                        {desc}
                        </p>
                        <a className="btnFillup2 liquidbg f5" href={liveLink}>See Live</a> &nbsp;&nbsp;&nbsp;
                        <a className="btnFillup2 l f5" href={sourceCode}>Source Code</a> &nbsp;&nbsp;&nbsp;
                       
                    </div>
                    </Fade>
                </Col>
                <Col>
                <Fade right cascade duration={2000}>
                    <div className='w-100 h-100 v-center center mt5'>
                        
                        <img src={pic} alt="Image Not Found"  className=' br3 shadow-2  tc center ma1 pa1 glow w-100 h-75 v-center' />
                    </div>                        
                 </Fade>
                </Col>
            </Row>
            <hr />
        </>
    )
}


export default Project;