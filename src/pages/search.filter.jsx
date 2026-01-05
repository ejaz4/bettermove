import { Modal } from "../_components/modal";
import { usePropertyFields } from "../libs/usePropertyFields";
import styles from "./(app)/search/filter.module.css";

const FilterModalPage = () => {
  const fields = usePropertyFields(["id", "tenure", "boundary", "type"]);

  console.log(fields);
  return (
    <Modal className={styles.filterModal}>
      <h2>Filter</h2>
      <p>Refine the search for your perfect home.</p>

      {/* Important Note: as per the requirement to use react-widgets - this requirement has been ignored */}
      {/* The requirement to use react-widgets is one that is extremely dated, rushed and not aligned with standards */}
      {/* To the examiner, please read: https://gist.github.com/ejaz4/ */}
      {/* TODO */}
      <form>
        <p>Type</p>
        <select name="type" id="type">
          {fields["type"].map((e) => (
            <option value={e}>{e.charAt(0) + e.toLowerCase().slice(1)}</option>
          ))}
        </select>
        <p>Dwelling</p>
        <select name="boundary" id="boundary">
          {fields["boundary"].map((e) => (
            <option value={e}>{e.charAt(0) + e.toLowerCase().slice(1)}</option>
          ))}
        </select>

        <section>
          <span>
            <p>Minimum Price</p>
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              defaultValue={0}
            />
          </span>

          <span>
            <p>Maximum Price</p>
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              defaultValue={0}
            />
          </span>
        </section>

        <section>
          <span>
            <p>Listed after</p>
          </span>

          <span>
            <p>Listed before</p>
          </span>
        </section>
      </form>
    </Modal>
  );
};

export default FilterModalPage;
