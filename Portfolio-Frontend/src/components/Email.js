import React, { useState, useEffect } from "react"
import axios from "axios"
import { Modal } from "react-responsive-modal"

const Email = props => {
  const [data, setData] = useState({
    email: "",
    text: "Default message from Portfolio Site",
    company: "",
  })
  const [sent, setSent] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const [nameRequired, setNameRequired] = useState("")
  const [emailRequired, setEmailRequired] = useState("")

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const emailRegex = /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u

  useEffect(() => {
    axios
      .get(
        "https://geolocation-db.com/json/dceecf90-43b2-11eb-b281-2f9a565e0770"
      )
      .then(res => {
        console.log(res)
        setData({ ...data, text: JSON.stringify(res.data) })
      })
      .catch(err => {
        setData({ ...data, text: "Could not grab IP location" })
      })
  }, [])

  let errorClass = ""
  const emailSubmit = e => {
    if (data.company === "") {
      setNameRequired("error")
      console.log("in here")
      return false
    } else {
      setNameRequired("success")
    }
    if (!emailRegex.test(data.email)) {
      setEmailRequired("error")
      console.log("in here")
      return false
    } else {
      setEmailRequired("success")
    }
    // if (data.text === "") {
    //   axios
    //     .get(
    //       "https://geolocation-db.com/json/dceecf90-43b2-11eb-b281-2f9a565e0770"
    //     )
    //     .then(res => {
    //       console.log(res)
    //       setData({ ...data, text: JSON.stringify(res.data) })
    //     })
    //     .catch(err => {
    //       setData({ ...data, text: "Could not grab IP location" })
    //     })
    // }

    axios
      .post("http://localhost:1337/emails", data, config)
      .then(res => {
        setSent(true)
      })
      .catch(err => {
        setEmailError("Error has occurred, please try again later.")
      })
    e.preventDefault()
  }

  return (
    <>
      <Modal open={props.modal} onClose={() => props.handleModal(false)}>
        {sent ? (
          <p className="email-sucess">
            "Request Sent! You will hear back from me shortly."
          </p>
        ) : (
          <form className="email-form" onSubmit={emailSubmit}>
            {/* <h2>Request my resume</h2> */}

            <div className="email-form-group">
              <h3>Company or Name</h3>
              <input
                className={"email-form-control " + nameRequired}
                type="text"
                placeholder="Example .Inc or John Doe"
                onChange={e => setData({ ...data, company: e.target.value })}
                required
              ></input>
            </div>
            <div className="email-form-group">
              <h3>Email</h3>
              <input
                className={"email-form-control " + emailRequired}
                type="email"
                placeholder="Example@Example.com"
                onChange={e => setData({ ...data, email: e.target.value })}
                required
              ></input>
            </div>
            {/* <div className="email-form-group">
              <h3>Message</h3>
              <textarea
                className="email-form-control"
                type="text"
                placeholder="Type your message here."
                onChange={e => setData({ ...data, text: e.target.value })}
                required
              ></textarea>
            </div> */}
            <div className="email-form-group">
              <p>{emailError}</p>
              <button
                className="submit-button"
                onClick={e => {
                  emailSubmit(e)
                }}
              >
                Request
              </button>
            </div>
          </form>
        )}
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
