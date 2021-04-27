import React from 'react';
import { css } from '@emotion/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export type TabProps = {
  /** 오늘 탭 내용 */
  todayTab: any;
  /** 신규 탭 내용 */
  newTab: any;
  /** 인기 탭 내용 */
  popularTab: any;
  /** 마이 탭 내용 */
  myTab: any;
};

const TabComp = ({ todayTab, newTab, popularTab, myTab }: TabProps) => {
  return (
    <Tabs css={tabStyle} variant="line">
      <TabList>
        <Tab _selected={activeTabStyle}>오늘</Tab>
        <Tab _selected={activeTabStyle} className="newTab">
          신규
        </Tab>
        <Tab _selected={activeTabStyle}>인기</Tab>
        <Tab _selected={activeTabStyle}>마이</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>{todayTab}</TabPanel>
        <TabPanel>{newTab}</TabPanel>
        <TabPanel>{popularTab}</TabPanel>
        <TabPanel>{myTab}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
const activeTabStyle = {
  borderBottom: '4px solid black !important',
  fontWeight: 700,
};
const tabStyle = css`
  width: 100%;

  & [role='tablist'] {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0 1.75rem;
  }
  & [role='tablist'] > button {
    flex-basis: 25%;
    background: transparent;
    padding: 0.7rem 0;
    position: relative;
    border-bottom: 0.4rem solid white;

    span {
      line-height: 150%;
    }
  }
  & [role='tablist'] > .newTab::after {
    content: '';

    width: 0.5rem;
    height: 0.5rem;
    background: red;
    border-radius: 50%;
    position: absolute;
    top: 20%;
    right: 35%;
  }
  & [role='tablist'] > .newTab:focus::after {
    top: 25%;
  }
`;
export default TabComp;
