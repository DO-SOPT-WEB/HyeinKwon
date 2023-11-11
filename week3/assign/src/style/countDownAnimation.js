import { keyframes } from "styled-components";

const neons = {
  main: "#FF55BB",
  trans1: "#FFD3A3",
  trans2: "#FCFFB2",
  trans3: "#B6EAFA",
};

export const countDownAnimation = keyframes`
 0% {
    color: ${neons.trans1}
    text-shadow: 0 0 10px ${neons.trans1}, 
    0 0 20px ${neons.trans2},
    0 0 30px ${neons.trans3};
  }
  33% {
    color: ${neons.trans1};
    text-shadow: 0 0 10px ${neons.trans2}, 
    0 0 20px ${neons.trans3},
    0 0 30px ${neons.main}; 
}
66% {
    color: ${neons.trans2};
    text-shadow: 0 0 10px ${neons.trans3}, 
    0 0 20px ${neons.main},
    0 0 30px ${neons.trans1};
}

  100% {
    color: ${neons.trans3};
    text-shadow: 0 0 10px ${neons.main}, 
    0 0 20px ${neons.trans1},
    0 0 30px ${neons.trans2};    
}
`;
