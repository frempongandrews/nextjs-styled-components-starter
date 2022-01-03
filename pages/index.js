import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: 1px solid;
`;

export default function Home() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Home</h1>
      </div>
    </Wrapper>
  );
}
