import Image from "next/image";
import styles from "./page.module.css";
import Exame from "./pages";


export default function Home() {
  return (
    <div className={styles.page}>
     <Exame/>
    </div>
  );
}
