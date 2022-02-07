import styled from "styled-components";


// MAIN CARD
export const Heart = styled.div`
    position: relative;
    /* position: absolute; */
    /* left: 13.66%;
    right: 79.3%;
    top: 84.42%;
    bottom: 10.55%; */

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
    /* identical to box height, or 100% */

    letter-spacing: -0.5px;

    color: ${props => props.color};
    
    
`;
export const Frame_Title = styled.div`

`;


// MAIN NEWS
export const Banner = styled.div`
    top: 80px;
    // background: #FD6106;
    background: ${props => props.color};
    position: static;
    width: 335px;
    height: 63.04px;
    left: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    /* margin: 30px 0px; */
    margin: 30px 0px 10px 0px;
`;
export const Banner_More_Text = styled.div`
    position: absolute;
    width: 30px;
    height: 12px;
    left: 20px;
    top: 9px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 12px;
    /* identical to box height, or 86% */

    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.8px;

    color: ${props => props.color};

`;