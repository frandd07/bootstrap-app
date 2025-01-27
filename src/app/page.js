import Image from "next/image";
import styles from "./page.module.css";
import Grid from "./Grid";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Grid />
      <br />
      <NavBar />
    </div>
  );
}
