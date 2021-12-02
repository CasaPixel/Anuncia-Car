import React from 'react';
import Faq from 'react-faq-component';
import styled from 'styled-components';


const data = {
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}
const FormatToggle=styled.div `
    width: 100%;
    padding-left: 30%;
    padding-right: 30%;
    padding-bottom: 5%;
`;

const Toggle =()=> {
    return (
      <div>
      <FormatToggle>
      <Faq 
            data={data} 
            styles={{
                bgColor: "white",
                titleTextColor: "#e96a04",
                rowContentColor: "#e96a04",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentTextSize: '16px',
                rowContentPaddingTop: '20px',
                rowContentMarginTop: '20px',
                rowContentPaddingBottom: '20px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '150px',
                arrowColor: "#e96a04",
                }} 
/>
      </FormatToggle>

      </div>
    )
  }
 
export default Toggle;
