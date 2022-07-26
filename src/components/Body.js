import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  background-color: Lavender;
`;

const Body = () => {
  return (
    <Container>
      <div className="header_info"></div>
    </Container>
  );
};

export default Body;
