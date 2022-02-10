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
    /* font-size: 10px; */
    font-size: 12px;
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
    /* background: #FD6106; */
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

// 현재시간과 작성시간 시간 차이 return 함수
export const DiffCurrentTime = ({unixTime}) => {
    // 데이터가 Unix 시간으로 들어옴
    const now = new Date();
    const writeDate = new Date(unixTime * 1000);
    const diffTime = now.getTime() - writeDate.getTime();
    const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinute = Math.floor(diffTime / (1000 * 60));
  
    let resultDiff = `${diffMinute} m ago`;
    if (diffMinute >= 60) {
      resultDiff = `${diffHour} h ago`;
      if (diffHour >= 24) {
        resultDiff = `${diffDay} d ago`;
      }
    }
    return resultDiff;
  };