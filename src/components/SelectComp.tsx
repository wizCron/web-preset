import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: 'color-red', label: 'Red' },
  { value: 'color-green', label: 'Green' },
  { value: 'color-blue', label: 'Blue' },
];

const SelectComp = () => {
  const [values, setValues] = useState<any[]>([]);

  return (
    <div style={{ paddingBottom: 50 }}>
      <Select
        options={options}
        value={values}
        onChange={(selected) => setValues((selected as any) || [])}
        isMulti
        isSearchable
        isClearable
        placeholder="Choose Color…"
        menuPosition="fixed"
        menuPlacement="bottom"
      />
    </div>
  );
};

export default SelectComp;