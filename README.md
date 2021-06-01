### Bienvenidos al paquete para enviar suscriptores a su mailchimp sin necesidad de un servidor

#### Para usarlo, siga estas instrucciones

```javascript

import Newsletter from "send-suscriptor-mailchimp-react"

const App = () => {

  const todo = {
    formClassName: 'form-class', // Opcional
    inputEmailClassName:"input-classname", // Opcional
    inputSubmitClassName: "submit-classname", // Opcional
    valueSubmit : 'Suscribirme', // Opcional
    listMailchimp: 'https://YOURLIST.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244&', //Obligatorio
    messageSucces: 'Bien hecho!', // Obligatorio
    messageError: 'No se pudo completar', // Obligatorio
    messageClassName: "property-class" // Opcional
  }

	//Se tiene que pasar el nombre como info si o si sino no se podra usar

  return (
    <div>
      <Newsletter info={todo}/>
    </div>
  )
}

export default App

```

### Links de interes
[Puedes descargar el paquete npm desde aquí](https://www.npmjs.com/package/send-suscriptor-mailchimp-react)

[Puedes ver el código fuente desde aquí](https://github.com/tbor00/send-suscriptor-mailchimp-react)


### Puedes contrubuir y recomendar este paquete!