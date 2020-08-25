import React from 'react';
import SideMenu from '../../components/SideMenu';
import '../../assets/styles/Skeleton.css';


class Skeleton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div class="mainContainer">
        <SideMenu />
        <div class="contentContainer">
          <Header />
          {children}
        </div>
      </div>
    );
  }
}

export default Skeleton;