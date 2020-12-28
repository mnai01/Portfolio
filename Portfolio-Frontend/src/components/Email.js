import React, { useState } from "react"
import axios from "axios"
import { Modal } from "react-responsive-modal"

const Email = props => {
  return (
    <>
      <Modal open={props.modal} onClose={() => props.handleModal(false)}>
        <form className="email-form">
          {/* <h2>Request my resume</h2> */}

          <div className="email-form-group">
            <h3>Comany or Name</h3>
            <input
              className="email-form-control"
              type="text"
              placeholder="Example .Inc"
            ></input>
          </div>
          <div className="email-form-group">
            <h3>Email</h3>
            <input
              className="email-form-control"
              type="text"
              placeholder="Example@Example.com"
            ></input>
          </div>
          <div className="email-form-group">
            <button className="submit-button">Request</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Email
// /*
// ===============
// Email
// ===============
// */
// .form-group {
//     padding: 0 25px;
//   }
