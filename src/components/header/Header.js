import Styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className="container ">
        <div className="wrapper">
          <div className={Styles.headerInfo}>
            <h1>Rizobek Restoran</h1>
            <p>Dushanba, 15 Yanvar 2024</p>
          </div>

          <input type="text" />
        </div>
      </div>
    </header>
  );
}
export default Header;
