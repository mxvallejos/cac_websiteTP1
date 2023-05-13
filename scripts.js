
function payTotal() 
{
    const FIRSTNAME = document.getElementById('formFirstName').value;
    const LASTNAME = document.getElementById('formLastName').value;
    const AUX = document.getElementById('formDesc').value;

    /* Verificar el valor de cada campo del formulario. */
    if (FIRSTNAME == "" || !isNaN(FIRSTNAME))
    {
        window.alert("Nombre: Nombre inválido.");
    } 
    else if (LASTNAME == "" || !isNaN(LASTNAME))
    {
        window.alert("Apellido: Nombre inválido.");
    }  
    else if (isNaN(AUX))
    {
        window.alert("Cantidad: El valor ingresado debe ser numérico");
    }
    else if (AUX <= 0)
    {
        window.alert("Cantidad: Debe ingresar números mayores a cero.");
    }
    /* Realizar el cálculo para Total a Pagar. */
    else
    {
        const TICKET_PRICE = 200;
        var _total = 0;

        switch (document.getElementById('formCat').value)
        {
            case "Estudiante":  _total = TICKET_PRICE * 0.20 * AUX;     break;
            case "Trainee":     _total = TICKET_PRICE * 0.50 * AUX;     break;
            case "Junior":      _total = TICKET_PRICE * 0.85 * AUX;     break;
            case "General":     _total = TICKET_PRICE * 1.00 * AUX;     break;
        }

        document.getElementById("payTotal").innerHTML = 'Total a Pagar: \u0024' + _total;
    }
}
  
function clearForm()
{
    document.getElementById("formFirstName").value = "";
    document.getElementById("formLastName").value = "";
    document.getElementById("formDesc").value = "";
    document.getElementById("formCat").value = "Estudiante";
    document.getElementById("formMail").value = "";

    if (document.getElementById("payTotal") != null) /* No aplica a index.html */
    {
        document.getElementById("payTotal").innerHTML = "Total a Pagar: \u0024 ---";
    }
}

function sendForm(text) 
{
    const FIRST_NAME = document.getElementById('formFirstName').value;
    const LAST_NAME = document.getElementById('formLastName').value;

    if (FIRST_NAME == "")
    {
        window.alert("Nombre: Debe rellenar el campo Nombre.");
    }
    else if (!isNaN(FIRST_NAME))
    {
        window.alert("Nombre: El valor ingresado es inválido.");
    }
    else if (LAST_NAME == "")
    {
        window.alert("Apellido: Debe rellenar el campo Apellido.");
    }
    else if (!isNaN(LAST_NAME))
    {
        window.alert("Apellido: El valor ingresado es apellido.");
    }
    else
    {
        window.alert(text);
        clearForm();
    }
}
