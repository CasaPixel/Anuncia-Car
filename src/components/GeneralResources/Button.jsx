import styled from "styled-components";

const ButtonStyle = styled.button`
  width: auto;
  background-image:linear-gradient(to left,#cd193e,#e96a04);
  border: none;
  display: inline-block;
  padding: 10px 20px 10px 20px;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 600px;
  box-shadow: 0px 10px 35px -15px #000;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    color: orange;
    background-color: #fff;
  }
`;

const OrangeButton = ({ text, action }) => {
  return (
    <ButtonStyle onClick={action}>
      {text}
    </ButtonStyle>
  );
};

export default OrangeButton;
