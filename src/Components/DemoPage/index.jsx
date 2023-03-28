import { styles } from "../../styles";
import Card from "../Card";
import Page from "../Page";

const Demo = () => (
  <Page>
    <Card title="Hello World">
      <p className={styles.typography.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum
        perferendis impedit fugiat doloribus rem non inventore similique
        reiciendis incidunt autem doloremque nemo repellendus molestias atque,
        optio accusantium quae! Delectus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim rerum perferendis impedit fugiat doloribus rem
        non inventore similique reiciendis incidunt autem doloremque nemo
        repellendus molestias atque, optio accusantium quae! Delectus.
      </p>
    </Card>

    <Card title="Hello World">
      <p className={styles.typography.content} style={{ direction: "rtl" }}>
        مالي وللدنيا؟
      </p>
      <a className={styles.typography.url} href="https://blog.unhappyfolk.org">
        https://blog.unhappyfolk.org
      </a>
    </Card>

    <Card title="Hello World">
      <p className={styles.typography.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum
        perferendis impedit fugiat doloribus rem non inventore similique
        reiciendis incidunt autem doloremque nemo repellendus molestias atque,
        optio accusantium quae! Delectus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim rerum perferendis impedit fugiat doloribus rem
        non inventore similique reiciendis incidunt autem doloremque nemo
        repellendus molestias atque, optio accusantium quae! Delectus.
      </p>
    </Card>

    <Card title="Hello World">
      <p className={styles.typography.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum
        perferendis impedit fugiat doloribus rem non inventore similique
        reiciendis incidunt autem doloremque nemo repellendus molestias atque,
        optio accusantium quae! Delectus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim rerum perferendis impedit fugiat doloribus rem
        non inventore similique reiciendis incidunt autem doloremque nemo
        repellendus molestias atque, optio accusantium quae! Delectus.
      </p>
    </Card>

    <Card title="Hello World">
      <p className={styles.typography.content} style={{ direction: "rtl" }}>
        مالي وللدنيا؟
      </p>
      <a className={styles.typography.url} href="https://blog.unhappyfolk.org">
        https://blog.unhappyfolk.org
      </a>
    </Card>
  </Page>
);

export default Demo;
