## Bienvenidos al paquete para enviar suscriptores a su mailchimp sin necesidad de un servidor
## Welcome to the package to send subscribers to your mailchimp without the need for a server


#### Para usarlo, siga estas instrucciones
#### To use it, follow these instructions

```javascript

import Newsletter from "send-suscriptor-mailchimp-react"

const App = () => {

  const todo = {
    formClassName: 'form-class', // Opcional - Optional
    inputEmailClassName:"input-classname", // Opcional - Optional
    inputSubmitClassName: "submit-classname", // Opcional - Optional
    valueSubmit : 'Suscribirme', // Opcional - Optional
    listMailchimp: 'https://YOURLIST.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244&', // Obligatorio - Mandatory
    messageSucces: 'Bien hecho!', // Obligatorio - Mandatory
    messageError: 'No se pudo completar', // Obligatorio - Mandatory
    messageClassName: "property-class" // Opcional - Optional
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


### ¿De donde saco el link de la lista de mailchimp?

```

Es muy fácil, lo primero que tienes que hacer es crearte una cuenta en mailchimp e iniciar sesión

Una vez que estas logueado te encontraras con un dashboard. Tienes que hacer click en audiencia. esto te va a llevar

a una pantalla y te va a aparecer otro sidebar. Clickea la opcion que dice Signup Forms

Y elegí la opción que dice Embedded forms. Allí te aparecera una ventana que dice Copy/paste onto your site

Ahí adentro busca la siguiente etiqueta 

<form action="https://YOURLIST.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

Nosotros necesitamos solo el link que tiene la etiqueta action

De esta forma te tendrá que quedar tu link de lista de mailchimp: 

https://YOURLIST.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244.

Una vez sepas esto. Ya esta!

```

### Where do I get the link from the mailchimp list?

```

It is very easy, the first thing you have to do is create an account in mailchimp and log in

Once you are logged in you will find a dashboard. You have to click on audience. this is going to take you

to a screen and another sidebar will appear. Click on the option that says Signup Forms

And I chose the option that says Embedded forms. There you will see a window that says Copy / paste into your site

Look in there for the following tag

<form action="https://YOURLIST.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

We only need the link that has the action tag

In this way you will have to have your mailchimp list link:

https://YOURLIST.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244.

Once you know this. That's it!

```




### Links de interes
### Links of interest

[Puedes descargar el paquete npm desde aquí](https://www.npmjs.com/package/send-suscriptor-mailchimp-react)

[Puedes ver el código fuente desde aquí](https://github.com/tbor00/send-suscriptor-mailchimp-react)

[Click to view in live / Click para verlo en vivo](https://send-suscriptor-mailchimp-react.netlify.app/)

[Puedes ver un ejemplo desde aquí](https://github.com/tbor00/example-react-mailchimp)


### Puedes contrubuir y recomendar este paquete!
### You can contribute and recommend this package!