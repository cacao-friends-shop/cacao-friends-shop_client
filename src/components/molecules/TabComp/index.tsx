import React from 'react';
import { css } from '@emotion/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export type TabProps = {
  todayTab: any;
  newTab: any;
  popularTab: any;
  myTab: any;
};

const TabComp = ({ todayTab, newTab, popularTab, myTab }: TabProps) => {
  return (
    <Tabs css={tabStyle} variant="line">
      <TabList>
        <Tab
          _selected={{
            borderBottom: '4px solid black !important',
            fontWeight: 700,
          }}
        >
          오늘
        </Tab>
        <Tab
          _selected={{
            borderBottom: '4px solid black !important',
            fontWeight: 700,
          }}
        >
          신규
        </Tab>
        <Tab
          _selected={{
            borderBottom: '4px solid black !important',
            fontWeight: 700,
          }}
        >
          인기
        </Tab>
        <Tab
          _selected={{
            borderBottom: '4px solid black !important',
            fontWeight: 700,
          }}
        >
          마이
        </Tab>
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
  & [role='tablist'] > button:nth-child(2)::after {
    content: '';

    width: 0.5rem;
    height: 0.5rem;
    background: red;
    border-radius: 50%;
    position: absolute;
    top: 20%;
    right: 35%;
  }
  & [role='tablist'] > button:nth-child(2):focus::after {
    top: 25%;
  }
`;
export default TabComp;
