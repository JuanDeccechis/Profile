import React, { Component } from "react";

import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';
import Curriculum from '../components/Curriculum';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import reducer from "../reducer";
import '../styles/pdf.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.printDocument = this.printDocument.bind(this);
    }

    printDocument() {
        let scrollPos =  window.scrollY;
        window.scroll(0,0);
        const input = document.querySelector('#divToPrint');
        html2canvas(input, {scale: "0.9"})
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({  orientation: 'portrait' });
                pdf.addImage(imgData, 'png', 0, 0, input.width, input.height);
                pdf.save("CV Juan Cruz Deccechis.pdf");
            });
        window.scrollTo(0,scrollPos);
    }

    render() {
        return (
            <div className="home">
                <button className="button-with-icon" onClick={this.printDocument}>
                <div className="img short-img img-button img-download inline"></div>
                    {this.props.language === 'es' ? 'Descargar CV' : 'Download CV' }</button>
                <div className="container mt4" id="divToPrint">
                    <Curriculum></Curriculum>
                </div>
            </div>
        );
    };
}

export default withLanguage(withTheme(Home));