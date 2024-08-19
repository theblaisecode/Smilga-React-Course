import styled from "styled-components";

const LayoutWrapper = styled.section`
  width: 67vw;
  max-width: var(max-width);
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 100vw;
  }
`;

export default LayoutWrapper;
