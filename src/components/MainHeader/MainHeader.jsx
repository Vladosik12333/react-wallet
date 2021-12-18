import { MainHeaderStyled } from "./MainHeader.styled";
import { ContainerStyled } from "../_styled/container.styled";

function MainHeader() {
  return (
    <MainHeaderStyled>
      <ContainerStyled>
        <button type="button">Menu</button>
        <h1>Журнал расходов</h1>
      </ContainerStyled>
    </MainHeaderStyled>
  );
}

export default MainHeader;
