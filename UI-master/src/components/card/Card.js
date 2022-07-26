import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const Card = (props) => {
    const Box= styled.div`
        height: 20rem; 
        width: 20rem;   
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 14px;
        margin: 2rem auto 0 auto;
        background: ${props.bg ? props.bg : bColor }; // ${bColor}; // linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        // animation: gradient 6s ease infinite;
        // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        @media only screen and (max-width: 768px) {
            height: 18rem; 
            width: 18rem;
            margin: 0 0.5rem;
        }
    `;
    const Upper = styled.div`
        height: 18rem;
        width: 100%;
        `;

    return (
        <Box>
            <Upper>
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"100%",height:"100%"}} />
            </Upper>
            
        </Box>
    )
}

export default Card
