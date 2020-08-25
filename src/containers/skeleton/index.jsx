import React from 'react';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import '../../assets/styles/Skeleton.css';

class Skeleton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div class="mainContainer">
        <SideMenu />
        <div class="contentContainer">
          <Header />
          <div class="contentArea">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Skeleton;