import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FormInputItem = ({
  onInputChange,
  onSubmit,
  inputValue,
  onFormClick,
  isReadOnly,
}) => {
  return (
    <Form
      data-bs-theme="dark"
      className="px-2 position-sticky top-0"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search"
          className=" rounded-start-pill "
          onChange={onInputChange}
          value={inputValue}
          onTouchCancel={(data) => console.log(data, "dataaa")}
          onClick={onFormClick}
          autoFocus={true}
          readOnly={isReadOnly}
          ref={(input) => {
            input?.focus();
          }}
        />
        <div
          className=" border rounded-end-pill fs-5 px-3 py-0 btn btn-dark d-flex justify-content-center align-items-center "
          onClick={onSubmit}
        >
          <RiSearchLine size={25} />
        </div>
      </InputGroup>
    </Form>
  );
};

export default FormInputItem;
