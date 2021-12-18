import {
  SectionPanels,
  ContainerHeader,
  Item,
  ButtonStyled,
} from "./MainPanel.styled";
import { ContainerStyled } from "../_styled/container.styled";

function MainPanel({ title, options, buttonColor }) {
  return (
    <SectionPanels>
      <ContainerStyled>
        <div>
          <ContainerHeader>
            <h2>{title}</h2>
            <p>RUB</p>
          </ContainerHeader>
          <ul>
            {options.map(({ period, sum }) => (
              <li key={period}>
                <Item>
                  <span>{period}</span>
                  <span>{sum}</span>
                </Item>
              </li>
            ))}
          </ul>
        </div>
        <ButtonStyled type="button" bgColor={buttonColor}>
          +
        </ButtonStyled>
      </ContainerStyled>
    </SectionPanels>
  );
}

export default MainPanel;
