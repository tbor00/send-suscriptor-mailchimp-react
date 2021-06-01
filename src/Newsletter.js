import React, { useState } from "react"
import jsonp from "jsonp"

const Newsletter = (props) => {

    const [form, setForm] = useState({
        email: ""
    })

    const [stateMailchimp, setStateMailchimp] = useState(null)


    if (props.info.listMailchimp) {
        let replace = props.info.listMailchimp.replace('post?', 'post-json?')

        const handleSubmit = (event) => {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })

        }

        const sendSubmit = (event) => {
            event.preventDefault()
            let list = `${replace}&MERGE0=${form.email}`
            jsonp(list, { param: "c" }, (err, data) => {
                if (data.result === "success") {
                    setStateMailchimp(props.info.messageSucces)
                } else {
                    setStateMailchimp(props.info.messageError)
                }
            })
        }



        return (
            <div>
                <form className={props.info.formClassName ? props.info.formClassName : 'form-submit-mailchimp'} onSubmit={sendSubmit}>
                    <input type="email" className={props.info.inputEmailClassName ? props.info.inputEmailClassName : 'input-email-mailchimp'} name="email" onChange={handleSubmit} />
                    <input type="submit" value={props.info.valueSubmit ? props.info.valueSubmit : 'Suscribirse'} className={props.info.inputSubmitClassName ? props.info.inputSubmitClassName : 'input-submit-mailchimp'} />
                </form>
                <p className={props.info.messageClassName ? props.info.messageClassName : 'message-class'}>{stateMailchimp != null ? stateMailchimp : ""}</p>
            </div>
        )
    } else {
        return (
            <div>
                Necesitamos la lista de mailchimp para poder hacer todo este proceso
            </div>
        )
    }
}



export default Newsletter