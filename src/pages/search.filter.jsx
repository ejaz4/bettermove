import { Modal } from "../_components/modal";
import { useProperties } from "../libs/useProperties";
import { usePropertyFields } from "../libs/usePropertyFields";

const FilterModalPage = () => {
  const fields = usePropertyFields(["id", "tenure", "boundary", "type"]);

  return (
    <Modal>
      <h2>Filter</h2>
      <p>Refine the search for your perfect home.</p>

      {Object.keys(fields).map((name) => {
        return (
          <div>
            <p>{name}</p>
            <select>
              {fields[name].map((op) => (
                <option>{op}</option>
              ))}
            </select>
          </div>
        );
      })}
    </Modal>
  );
};

export default FilterModalPage;
