// 1. -서버와 통신 시 CORS가 허용되었는지 점검한다.
//   - 앱의 로딩속도, 각 동작 시 성능, 버그 등을 점검한다.
//   - 브라우저, 디바이스별로 앱이 정상적으로 동작하는지 점검한다

// 2. UI framework
// 3.import styled from "styled-components";


// 4.
// const Container = styled.div`
//   transition: 500ms 0ms;
//   background-color: gray;
//   width: 100px;
//   height: 100px;

//   :hover {
//     background-color: purple;
//     width: 250px;
//     height: 250px;
//   }
// `;

// export default function App() {
//   return <Container />;
// }




// 5.
// import styled from "styled-components";
// import React from "react";

// const Container = styled.div`
//   padding: 10px;
//   color: white;
//   background-color: ${(props) => (props.score > 10 ? "blue" : "green")};
// `;

// const PrintMenu = props => {
//   return(
//     <Container score={props.score}>
//       {props.score >= 10 ? <p>여름엔 팥빙수</p> : <p>겨울엔 칼국수</p>}
//     </Container>
//   );
// }

// export default function App() {
//   const score = [9, 10, 11];

//   return (
//     <React.Fragment>
//       <PrintMenu score={score[0]}/>
//       <PrintMenu score={score[1]}/>
//       <PrintMenu score={score[2]}/>
//     </React.Fragment>
//   );
// }

// 6.
// import styled from "styled-components";

// const scores = [46, 74, 23, 38, 63, 58, 93, 67, 84, 86, 54, 34];

// const ScoresContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-column-gap: 20px;
//   grid-row-gap: 10px;
// `;

// function getColorByScore(score) {
//   if (score < 40) return "red";
//   if (score < 70) return "green";
//   return "blue";
// }

// const Score = styled.div`
//   position: relative;
//   color: ${(props) => getColorByScore(props.score)};
//   text-align: center;
//   width: 100px;
//   height: 50px;
//   line-height: 50px;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background-color: ${(props) => getColorByScore(props.score)};
//     opacity: 0.2;
//     border-radius: 8px;
//   }
// `;

// export default function App() {
//   return (
//     <ScoresContainer id='check_layout'>
//       {scores.map((score, i) => {
//         return (
//           <Score score={score} key={`score-${i}-${score}`} id={`score-${i}-${score}`}>
//             {score}
//           </Score>
//         );
//       })}
//     </ScoresContainer>
//   );
// }