const { styles } = require("../../styles");

const Card = ({ children, title }) => (
  <div className={styles.card.container}>
    {title && <p className={styles.typography.title}>{title}</p>}
    {children}
  </div>
);

export default Card;
