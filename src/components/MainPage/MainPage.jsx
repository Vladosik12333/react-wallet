import MainHeader from "../MainHeader/MainHeader";
import MainPanel from "../MainPanel/MainPanel";
// import {
//   costsPanelOptions,
//   incomesPanelOptions,
//   balancePanelOptions,
// } from "../../data/mainPanelsOptions.json";
import options from "../../data/mainPanelsOptions.json";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";

function MainPage() {
  return (
    <>
      <MainHeader />
      <MainPanel
        title="Расходы"
        options={options.costsPanelOptions}
        buttonColor="orange"
      />
      <MainPanel
        title="Доходы"
        options={options.incomesPanelOptions}
        buttonColor="green"
      />
      <MainPanel
        title="Баланс"
        options={options.balancePanelOptions}
        buttonColor="purple"
      />
      <StatisticsBtns />
    </>
  );
}

export default MainPage;
