import styled from "@emotion/styled";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;

export const SectionPanels = styled.section`
  padding: 30px 0;
  margin: 50px 0;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  & li {
    @extend ContainerHeader;
  }
`;

export const Item = styled(ContainerHeader)``;

export const ButtonStyled = styled.button`
  margin: 25px 0 0 50px;
  background-color: ${({ bgColor }) => bgColor};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: white;
`;
