import React, { Component } from "react";

import { withTheme } from '../contexts/ThemeContext';
import { withLanguage } from '../contexts/LanguageContext';
import Curriculum from '../components/Curriculum';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import reducer from "../reducer";

const PDFStyles = {
    backgroundColor: '#FF0000',
    width: '210mm',
    minHeight: '297mm',
    marginLeft: 'auto',
    marginRight: 'auto'
}

class Home extends Component {
    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input, {scale: "0.75"})
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("CV Juan Cruz Deccechis.pdf");
            });
    }

    render() {
        const { theme, language } = this.props;
        return (
            <div className="home">
                <button onClick={this.printDocument}>Print</button>
                <div className="container mt4" id="divToPrint">
                    <Curriculum></Curriculum>
                </div>
            </div>
        );
    };
}

export default withLanguage(withTheme(Home));