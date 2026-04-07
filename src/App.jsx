import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SPKhuyenMai, { SPBanChay, SPHot } from "./Components/Main";
import Main from "./Components/Main";
import MyProfile from "./Components/Users/MyProfile";
import ShowProduct from "./Components/Users/ShowProduct";

export default function App() {
  return (
    <>
      <Header></Header>
      <MyProfile></MyProfile>
      <SPKhuyenMai></SPKhuyenMai>
      <SPBanChay></SPBanChay>
      <SPHot></SPHot>
      <ShowProduct />
      <Footer></Footer>
    </>
  );
}
