type TrEmployeeProps = {
  name: string;
  birth: string;
  start: string;
  street: string;
  city: string;
  country: string;
  dep: string;
  code: number;
};

/**
 * This component return a `tr` for the table of employees
 * - - -
 * @param name type `string`;
 * @param birth type `string`;
 * @param start type `string`;
 * @param street type `string`;
 * @param city type `string`;
 * @param country type `string`;
 * @param dep type `string`;
 * @param code type `number`;
 */
export default function TrEmployee(props: TrEmployeeProps) {
  return (
    <tr>
      <td className={styles.td_left}>
        <div className={styles.td_container}>{props.name}</div>
      </td>
      <td className={styles.td}>
        <div className={styles.td_container}>{props.birth}</div>
      </td>
      <td className={styles.td}>
        <div className={styles.td_container}>{props.start}</div>
      </td>
      <td className={styles.td}>
        <div className={styles.td_container}>{props.street}</div>
      </td>
      <td className={styles.td}>
        <div className={styles.td_container}>{props.city}</div>
      </td>
      <td className={styles.td}>
        <div className={styles.td_container}>{props.country}</div>
      </td>
      <td className={styles.td}>
        <div className={styles.td_container}>{props.dep}</div>
      </td>
      <td className={styles.td_right}>
        <div className={styles.td_container}>{props.code}</div>
      </td>
    </tr>
  );
}

const styles = {
  td: "bg-neutral-50 p-3 text-left border-neutral-200 border-t-8 border-r-8 border-l-8",
  td_container: "truncate",
  td_left:
    "bg-neutral-50 p-3 text-left border-neutral-200 border-t-8 border-r-8",
  td_right:
    "bg-neutral-50 p-3 text-left border-neutral-200 border-t-8 border-l-8",
};
