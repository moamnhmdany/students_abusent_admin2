import { React } from "react";
import Header from "../../components/Header/Header";
import RightList from "../../components/RightList/RightList";
import "./MainStyleScreen.css";
import AddStudentScreen from "../AddStudentScreen/AddStudentScreen";
function MainScreen() {
  return (
    <div className="mainContainer">
      <Header />
      <div className="wrapper">
        <RightList />
        <div className="box">
          <AddStudentScreen />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
