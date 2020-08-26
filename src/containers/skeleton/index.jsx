import React from 'react';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import '../../assets/styles/Skeleton.css';

class Skeleton extends React.Component {
  render() {
    const {
      children,
      sendSearch,
      handleForm,
      onCarForm,
    } = this.props;
    return (
      <div className="mainContainer">
        <SideMenu />
        <div className="contentContainer">
          <Header
            sendSearch={sendSearch}
            handleForm={handleForm}
            onCarForm={onCarForm}
          />
          <div className="contentArea">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Skeleton;
