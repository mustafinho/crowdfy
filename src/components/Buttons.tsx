import styled, {css} from "styled-components";


const ButtonStyles = css`
  padding: 0.35rem 0.85rem;
  text-decoration: none;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1.8rem;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  width: 9em;
	border: solid 1.8px #ffffff;
	border-radius: 1rem;

  @media (max-width: 960px) {
    /* margin: 0 0.5rem 0 0.5rem; */
    text-decoration: none;
    padding: 0.25rem 1rem;
    font-size: 1.8rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0.85rem 0.85rem;
  }
  :hover {
    transform: scale(1.05);
  }

`

export const Button = styled.a`
${ButtonStyles}
`

export const ButtonStyles2 = css`
 
  padding: 0.35rem 0.85rem;
  text-decoration: none;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  margin-inline: 3em;
  margin-block:1em;
  width: fit-content;
	border: solid 1.8px none; /*#ffffff;*/
	border-radius: 0.6rem;
	background: linear-gradient(#dc9de4, #B721EC);
  color: #ffffff;
  
  @media (max-width: 960px) {
    /* margin: 0 0.5rem 0 0.5rem; */
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 1rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0.85rem 0.85rem;
  }
  :hover {
    transform: scale(1);
  }


`

export const Button2 = styled.a`
${ButtonStyles2}
`


// export const Button = styled.button`
//     border-radius: 50px;
//     background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
//     white-space: nowrap;
//     padding: ${({ big }) => (big ? '14px 48px' : "12px 30px")};
//     color: ${({ dark }) => (dark ? "#010606" : "#fff")};
//     font-size: ${({ fontBig }) => (fontBig ? "20px" : '16px')};
//     outline: none;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;

//     align-items: center;
//     transition: all 0.2s ease-in-out;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//     background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};

//     }


// `