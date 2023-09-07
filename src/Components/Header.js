import React,{Component} from "react";

// finally i learned how to import bootstrap in css this took me 10 days 
// import 'bootstrap/dist/css/bootstrap.css';
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'tachyons'
import { Bounce, Fade } from "react-reveal";
class Header extends Component{
    render(){
        // compoent is done
        return(
            <>
                <Fade left duration={1500}>
                        <Row>
                                <div className="bg-light-gray tc shadow-1 lh-title pa2 ma1 helvetica hover-bg-moon-gray">
                                    <h1 className="bg-washed-yellow f1 f-subheadline tracked br3 avenir wrap green b"> Hi, My Name Is <strong className="blue hover-light-blue"> `Faisal` </strong>  | Full Stack Web Developer</h1>
                                    <Bounce duration={1000} left cascade>
                                        <div className="bg-washed-red ttu br4 f2 code trackled-mega pa1  hover-bg-light-red">
                                            <span> simple but different </span>
                                        </div>
                                    </Bounce>
                                    <hr/>
                                    <a className="btnFillup liquidbg f6 b" href="#">Know More</a>
                                    </div>
                        </Row>
                </Fade>
            </>
        )
    }
}

export default Header;

