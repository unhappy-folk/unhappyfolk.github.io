import marble from "../../assets/marble.jpg";
import { styles } from "../../styles";

const Card = ({ children, title }) => (
  <div
    className={`${styles.card.container} bg-repeat`}
    style={{ backgroundImage: `url(${marble})` }}
  >
    {title && <p className={styles.typography.title}>{title}</p>}
    {children}
  </div>
);

export default Card;
