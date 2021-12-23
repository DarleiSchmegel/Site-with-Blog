import styled from 'styled-components';

export const RouterTestsPageWrapper = styled.div`
  padding-top: 150px;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;
