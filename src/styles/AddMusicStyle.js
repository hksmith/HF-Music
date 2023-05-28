import styled from '@emotion/styled';

export const FormContainer = styled.div`
  color: white;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(to right bottom, #000000, #4B0082);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: hsl(275, 100%, 40%);
  color: white;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const PopupStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 35%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  transform: translate(-50%, -50%);
  background-color: black;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 50px;
  padding: 20px;
  z-index: 1000;
  overflow: auto;
`;

export const ButtonClose = styled.button`
  background: transparent;
  margin: 5px;
  padding: 5px 5px;
  color: red;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  margin-left: 90%;
  font-size: 24px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.75;
  z-index: 50;
`;
