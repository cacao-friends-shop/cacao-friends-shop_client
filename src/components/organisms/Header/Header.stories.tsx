import Header from './index';
import TabComp from '../../molecules/TabComp';

export default {
  title: 'organisms/Header',
  component: Header,
};

export const HeaderBlock = () => <Header />;

export const HeaderWithTabBlock = () => <Header TabComp={TabComp} />;
