import React from "react";
import styled from "styled-components";
import "./Card/Contador.css";
//States e Props
const TitleCounter = styled.p`
    padding-top:10px;
    font-size: 25px;
    padding-left: 15px;
`;

const TitleBlack = styled.p `
    padding-top:10px;
    font-size: 22px;
    padding-left: 15px;
    color: black;
`;
const ContadorDiv = styled.div `
    display: flex;
    border-radius: 10px;
    background-color: gainsboro;
`;
class ContadorNumber extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        contador : 0
      }; 
    }
    onClickHandler(){
      this.setState({
         contador : this.state.contador+1
      });
    }

    onClickDim(){
        this.setState({
           contador : this.state.contador-1
        });
      }
    render(){
      return (
        <div className="ContainerDiv"> 
            <ContadorDiv>
                <Button label="-" onClick={()=>this.onClickDim()} />
                <Contador valor={this.state.contador} />          
                <Button label="+" onClick={()=>this.onClickHandler()}  />
            </ContadorDiv>       
          <div className="CounterDiv">
            <TitleCounter> <strong>$ 00.00</strong> </TitleCounter><TitleBlack>MXN X SEMANA</TitleBlack>
          </div>
        </div>
       
      )
    }
  }
  //Functional Component
  const Contador = props => {
    return(
      <div>
        <h1 className="Contador"><strong>{props.valor}</strong></h1>
      </div>
    );
  };
  const Button = props => {
      return (
        <button id="Butonplus" onClick={()=>props.onClick()}> {props.label}</button>
      );
  };
  
 export default ContadorNumber;