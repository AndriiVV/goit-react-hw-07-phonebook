import styles from "./Filter.module.css"

import { useDispatch } from "react-redux";

import { changeSelect } from "../../redux/phonebookSlice";

const Filter = () => {

  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.title}>Find contacts by Name</p>
      <input
        type="text"
        onChange={(event) => dispatch(changeSelect(event.target.value))}
        className={styles.input}
      />
    </>
  )
}

export default Filter;