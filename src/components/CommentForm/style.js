import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  form {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }

  form input {
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
  }

  form button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: blueviolet;
    color: #ffffff;
  }

`;