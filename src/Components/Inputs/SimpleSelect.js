import { Select } from "antd";
import { useSelector } from "react-redux";

const { Option } = Select;

function onSearch(val) {}

const SimpleSelect = ({ value, options, onChange, name, placeholder }) => {
  let currentOptions = [];
  const allData = useSelector(state => state.app.allData);
  if (options.type === "CUSTOM") {
    currentOptions = options.data;
  } else {
    currentOptions = allData[options.type] || [];
  }
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      allowClear={true}
      value={value}
      onChange={val => {
        let e = {
          target: {
            name,
            value: val,
          },
        };
        onChange(e);
      }}
      style={{ minWidth: "120px" }}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {currentOptions.map(op => (
        <Option value={op._id} key={op._id}>
          {op.name}
        </Option>
      ))}
    </Select>
  );
};
export default SimpleSelect;
