import React, { useState } from "react";

function Add_post(props) {
  let form_container_style = {
    boxSizing: "border-box",
    width: "60%",
    margin: "auto",
    marginTop: "15px",
    marginBottom: "20px",
  };

  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  // const submit = (e) => {
  //   e.preventDefault();
  //   if (!title || !desc) {
  //     alert("Tile or Description cannot be leaved blank.");
  //   } else {
  //     props.add_todo.add_todo(title, desc);
  //   }
  // };

  return (
    <section id="add-post">
      <div className="section-heading">
        <h2>
          Add News here
        </h2>
      </div>
      <div style={form_container_style}>
        {/* <form onSubmit={submit}> */}
        <form>
          <div className="mb-3">
            <label className="form-label">
              News Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              News Description
            </label>
            <textarea
              cols="30"
              rows="20"
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword1"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline-secondary submit-btn-signup">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Add_post;
