function Validar(form)
{
  for (let i = 0; i <form.length; i++)
  {
    if(form.elements[i].value == "")
    {
      alert("Debe introducir los datos de "+form.elements[i].id);
      form.elements[i].focus();
      return false;
    }
  }
}
