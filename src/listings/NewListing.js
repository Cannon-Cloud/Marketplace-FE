import React, { useState } from "react";
import { toast } from "react-toastify";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { DatePicker } from "antd";
import moment from "moment";
import { Select } from "antd";

const config = process.env.REACT_APP_GOOGLEPLACES_API_KEY;

const { Option } = Select;

const NewListing = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const [location, setLocation] = useState(null);
  const { title, content, image, price, from, to, bed } = values;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(location);
  };

  const imageChangeHandler = (event) => {
    //
    setPreview(URL.createObjectURL(event.target.files[0]));
    setValues({ ...values, image: event.target.files[0] });
  };

  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const locaitonChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const hotelForm = () => {
    return (
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label className=" btn btn-outline-secondary btn-block m-2 text-left">
            Image
            <input
              type="file"
              name="image"
              onChange={imageChangeHandler}
              accept="image/*"
              hidden
            />
          </label>

          <input
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="Title"
            className="form-control m-2"
            value={title}
          />

          <textarea
            name="content"
            onChange={changeHandler}
            placeholder="Content"
            className="form-control m-2"
            value={content}
          />

          <GooglePlacesAutocomplete
            className="form-control m-2"
            placeholder="location"
            apiKey={config}
            onChange={({ suggestion }) => setLocation(suggestion.value)}
            // selectProps={{
            //   location,
            //   onChange: setLocation,
            // }}
          />

          <input
            type="number"
            name="price"
            onChange={changeHandler}
            placeholder="Price"
            className="form-control m-2"
            value={price}
          />

          {/* <input
            type="number"
            name="bed"
            onChange={changeHandler}
            placeholder="Number of Beds"
            className="form-control m-2"
            value={bed}
          />*/}
        </div>

        <Select
          onChange={(value) => setValues({ ...values, bed: value })}
          className="w-100 m-2"
          size="large"
          placeholder="Number of Beds"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select>

        <DatePicker
          placeholder="From date"
          className="form-control m-2"
          onChange={(date, dateString) =>
            setValues({ ...values, from: dateString })
          }
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, "days")
          }
        />

        <DatePicker
          placeholder="To date"
          className="form-control m-2"
          onChange={(date, dateString) =>
            setValues({ ...values, to: dateString })
          }
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, "days")
          }
        />

        <button className="btn btn-outline-primary m-2">Save</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Test</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {hotelForm()}
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
            {JSON.stringify(location)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewListing;
