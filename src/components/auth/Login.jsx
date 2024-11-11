import React, { useContext, useState } from "react";
import { Input } from "../UI/Input";
import styled from "styled-components";
import { AuthContext } from "../../context/LoginContext";
import { Button } from "../UI/Button";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setIsLoggedIn } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.charAt(0) !== password.charAt(0).toUpperCase()) {
      setError("Первая буква должна начинаться с большой буквы");
      return false;
    }

    return hasUpperCase && hasLowerCase && hasNumber;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      setError("Email должен содержать @gmail.com");
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    setIsLoggedIn("/");
    setError("");
  };

  return (
    <StyledContainers>
      <StyledContainer>
        <h1>Login</h1>
        <StyledForm onSubmit={handleLogin}>
          <StyledDiv>
            <label>Email:</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Введите свою почту"
              required
            />
          </StyledDiv>
          <StyledDiv>
            <label>Password:</label>
            <PasswordContainer>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Введите свою пароль"
                required
              />
              <EyeIcon onClick={togglePasswordVisibility}>
                {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </EyeIcon>
            </PasswordContainer>
          </StyledDiv>
          {error && <ErrorText>{error}</ErrorText>}
          <StyledArticle>
            <h1>Forgot your password</h1>
            <Button type="submit">Sign in</Button>
          </StyledArticle>
        </StyledForm>
      </StyledContainer>
    </StyledContainers>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  font-size: 21px;
  color: #000000;
  font-weight: 500;
  line-height: 25px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

const StyledContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 240px;
`;
