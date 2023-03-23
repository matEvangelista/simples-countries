import styled from "styled-components";

export const InputContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(31, 4, 68);
  text-align: center;
  padding: 5rem 0;
  color: white;

  input {
    padding: .8rem;
    width: 50%;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
  }

  input:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgb(75, 90, 255);
  }
`;

export const CardCountry = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  padding: 0.2rem;
  margin: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    box-shadow: 0px 0px 5px black;
    margin-top: 1rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p:last-of-type {
    margin: 0;
  }

  span {
    font-weight: bold;
  }
`;

export const Load = styled.div`
  background-color: white;
  width: fit-content;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem auto;
`