import React from "react";
 
const PDF = () => {
 
    // Function will execute on click of button
    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch("pdfTest.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SamplePDF.pdf";
                alink.click();
            });
        });
    };
};

    export default PDF;