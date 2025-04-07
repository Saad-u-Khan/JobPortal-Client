import React from "react";
import { useState } from "react";
import axios from "axios";

function Modal() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
    qualification: "",
    skills: "",
    experience: "",
    location: "",
  });
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/candidates/auth",
        values
      );
      console.log(response);
      closeModal();
    } catch (error) {
      console.error("Error adding candidate:", error);
    }
  };

  return (
    <div>
      <button onClick={openModal} className="btn btn-success">
        Add New Candidate
      </button>
      {modal && (
        <div
          className="modal fade show d-block modal-wrapper"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content animate-modal">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Enter Candidate Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleClick}>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={values.name}
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-email" className="col-form-label">
                      Email:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-email"
                      value={values.email}
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-password"
                      className="col-form-label"
                    >
                      Password:{" "}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="recipient-password"
                      value={values.password}
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-contact"
                      className="col-form-label"
                    >
                      Contact:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-contact"
                      value={values.contact}
                      onChange={(e) =>
                        setValues({ ...values, contact: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-qualification"
                      className="col-form-label"
                    >
                      Qualification:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-qualification"
                      value={values.qualification}
                      onChange={(e) =>
                        setValues({ ...values, qualification: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-skills"
                      className="col-form-label"
                    >
                      Skills:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-skills"
                      value={values.skills}
                      onChange={(e) =>
                        setValues({ ...values, skills: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-experience"
                      className="col-form-label"
                    >
                      Experience (in years):{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-experience"
                      value={values.experience}
                      onChange={(e) =>
                        setValues({ ...values, experience: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-location"
                      className="col-form-label"
                    >
                      Location:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-location"
                      value={values.location}
                      onChange={(e) =>
                        setValues({ ...values, location: e.target.value })
                      }
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-dark">
                      Add Candidate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
