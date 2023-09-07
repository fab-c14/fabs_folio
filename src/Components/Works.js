import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import Project from "../Assets/Project";
import Row from 'react-bootstrap/Row';

class Works extends Component{
    render(){

        return (
            <>
                <div>
                    <Container>
                        
                        <h1 className="f1 ttu tc b"> Projects</h1>
                        <Row>
                            <Project name="Css Linear Gradient Background Generator" pic="" sourceCode="https://google.com"  desc="Background Generator is a css linear gradient background code generator with live preview, which you can also use for your website and generate beautiful backgrounds in seconds and save your time to write code" sourceCode='https://github.com/fab-c14/background_generator.git' liveLink="https://google.com" picAlt='https://picsum.photos/370/180?random=1' />
                        </Row>
                    </Container>
                    
                </div>
            </>
        )
    }
}

export default Works;