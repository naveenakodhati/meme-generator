// Style your components here
import styled from 'styled-components'

export const MainAppComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  align-items: center;
  font-family: 'Open Sans';
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-self: center;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #35469c;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

export const FormMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 0px;
  align-self: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
    align-self: flex-start;
  }
`

export const CustomLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 15px;
  color: #7e858e;
`
export const CustomInput = styled.input`
  border: 1px solid #5a7184;
  border-radius: 7px;
  color: #7e858e;
  padding: 10px;
  outline: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 5px;
`
export const CustomSelect = styled.select`
  border: 1px solid #5a7184;
  border-radius: 7px;
  color: #7e858e;
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  cursor: pointer;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: 0px;
  padding: 10px;
  width: 120px;
  margin-top: 15px;
  border-radius: 7px;
`
export const MemeMobileDisplay = styled.div`
  background-image: url(${props => props.backgroundImage});
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 30px;
  @media screen and (min-width: 768px) {
    width: 40%;
    min-height: 60vh;
    order: 2;
  }
`
export const DisplayText = styled.p`
  color: white;
  text-align: center;
  font-size: ${props => props.selectFont}px;
  font-weight: 600;
`
