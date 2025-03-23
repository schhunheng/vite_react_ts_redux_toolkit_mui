import style from "./button.module.css";
import logo from "./../assets/react.svg";
function MyButton() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <button className={style.btn}>Click me</button>
    </div>
  );
}
export default MyButton;
