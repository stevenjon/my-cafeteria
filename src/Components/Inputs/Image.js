import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Resizer from "react-image-file-resizer";

const resizeFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "PNG",
      100,
      0,
      uri => {
        resolve(uri);
      },
      "base64"
    );
  });
const Image = ({ name, value, onChange }) => {
  const onRemove = file => {};
  const beforeUpload = async file => {
    const img = await resizeFile(file);
    onChange({
      target: {
        name,
        value: img,
      },
    });
  };

  return (
    <>
      <Upload
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onRemove={onRemove}
      >
        {value ? (
          <div style={{ background: "teal" }}>
            {" "}
            <img src={value} alt="meal pic" style={{ width: "100%" }}></img>
          </div>
        ) : (
          <div>Rasm</div>
        )}
      </Upload>
    </>
  );
};

export default Image;
