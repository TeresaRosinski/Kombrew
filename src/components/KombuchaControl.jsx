import React from "react";
import NewKombuchaForm from "./NewKombuchaForm"; //Kombucha is the parent to both form and list=== we need to import both here
import KombuchaList from "./KombuchaList";
import KombuchaDetail from "./KombuchaDetail";

class KombuchaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: [],
      selectedKombucha: null,
    };
  }

  handleDeletingKeg = (id) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.filter(
      (kombucha) => kombucha.id !== id
    );
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null,
    });
  };

  handleDeletingPint = (id) => {
    const updatedKombuchaList = this.state.masterKombuchaList.map(
      (kombucha) => {
        if (kombucha.id === id && kombucha.pints > 0) {
          kombucha.pints -= 1;
        }
        return kombucha;
      }
    );

    this.setState({
      masterKombuchaList: updatedKombuchaList,
      selectedKombucha: this.state.selectedKombucha,
    });
  };

  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.state.masterKombuchaList.filter(
      (kombucha) => kombucha.id === id
    )[0];
    this.setState({ selectedKombucha: selectedKombucha });
  };

  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(
      newKombucha
    );
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false,
    });
  };

  handleClick = () => {
    if (this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null,
      });
    }
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKombucha != null) {
      currentlyVisibleState = (
        <KombuchaDetail
          kombucha={this.state.selectedKombucha}
          onClickingDeletePint={this.handleDeletingPint}
          onClickingDeleteKeg={this.handleDeletingKeg}
        />
      );
      buttonText = "Return to Kombucha List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKombuchaForm
          onNewKombuchaCreation={this.handleAddingNewKombuchaToList}
        />
      );
      buttonText = "See All Kombucha Kegs";
    } else {
      currentlyVisibleState = (
        <KombuchaList
          kombuchaList={this.state.masterKombuchaList}
          onKombuchaSelection={this.handleChangingSelectedKombucha}
        />
      );
      buttonText = "Add Kombucha Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-light" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}
export default KombuchaControl;
