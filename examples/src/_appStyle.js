import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    > form {
      width: 80%;
      > button {
        width: 100%;
      }
    }
  }

  > section:first-child {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    > section {
      width: 400px;

      > form {
        > button {
          width: 95%;
        }
      }
    }

    > section:first-child {
      margin-right: 80px;
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 30px;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const JsonWrapper = styled.section``;

export const FormWrapper = styled.section``;

export const Textarea = styled.textarea`
  height: 650px;
  width: 80%;
  white-space: nowrap;
  color: #fff;
  background-color: #181818;

  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const ErrMessage = styled.div`
  margin-top: 20px;
  color: #f72910;
`;

export const Author = styled.div`
  margin: 30px 10px;
  text-align: center;

  > span {
    color: #fc2813;
  }

  @media screen and (min-width: 1024px) {
    margin: 50px 10px 30px;
  }
`;
