import React from 'react';
import styles from './UserStatusGraph.module.css';

const UserStatusGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    console.log(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    // setTotal(
    //   data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
    // );
  },[data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatusGraphs;
