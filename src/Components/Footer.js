import React from "react";

import { Component } from "react";
import Row from 'react-bootstrap/Row';
import { FaCopyright, FaFacebook,FaGithub, FaGithubSquare, FaInstagram, FaLinkedin, FaStar } from "react-icons/fa";

import 'tachyons';
import {Bounce} from 'react-reveal';
class Footer extends Component{
    render(){
        return(
            <>
            <Bounce bottom cascade duration={2000}>
            <div>
                <Row>
                    <div className="tc fw3 white bg-black">
                    <h1 className="tc fw4 bg-light-green br2 pa2 ma3 near-black">Follow Me On Social Media </h1>
                  
                            <div className="glow"> 
                                <a href="https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ==" target="_new" className="red dim">
                                <FaInstagram size={35}/>
                                </a>  &nbsp;&nbsp;&nbsp;
                                <a href="https://github.com/fab-c14" target="_new" className=" white dim">
                                <FaGithub size={35}/>
                                </a> &nbsp;&nbsp;&nbsp;
                                <a href="https://www.facebook.com/fabc.love.to.thunder" target="_new" className="dim light-blue">
                                <FaFacebook size={35}/>
                                </a> &nbsp;&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229" target="_new" className="dim">
                                <FaLinkedin size={35}/>
                                </a>
                            </div>
                            <hr  width={'50%'} style={{margin:'1rem auto', border:'solid red 2px'}}/>
                            <div className="tc code f6 fw5">
                                
                                <h6><strong><FaCopyright /> 2023 </strong>  - Made With Acknowledgement Of Heart By Faisal Farooq </h6> 
                                Come On Give Me A Star&nbsp;
                                <FaStar /> <a href="https://github.com/fab-c14" target="_new" className="dim green" ><FaGithubSquare size={33} /> </a>
                                 <hr />
                                 <h6 className="tc fw1 small"> inspired by cobiwave's <span className="i"> [ #SampleFolio] </span> template </h6>
                                 <br/>
                            </div>
                    </div>
                </Row>
            </div>
            </Bounce>
            </>
        )
    }
}

export default Footer;

// site is completed now we need some additional information to be added and some things need to be modified