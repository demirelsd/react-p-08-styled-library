import React from 'react'
import { LoginContainer, FormContainer, StyledForm, StyledInput,Header, StyledButton } from './Login.style'
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser}) => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("demirelsd")
    sessionStorage.setItem('user', "demirelsd")
    navigate(-1)

  };
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login