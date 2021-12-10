import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.colors.backgroundIndex};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  min-width: 100vw;
  .brand {
    color: ${(props) => props.theme.colors.title};
  }
`;

export const Nav = styled.nav`
  width: 50%;
  ul {
    list-style: none;
    display: flex;
    /* gap: ${(props) => props.theme.spacing.xs}; */
    justify-content: space-around;
  }
  ul li a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.grayLine};
  }
  ul li a:hover {
    cursor: pointer;
  }
`;
