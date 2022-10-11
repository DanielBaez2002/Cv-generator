const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputPhone = document.getElementById("phone");
const inputEmail = document.getElementById("email");
const inputDirection = document.getElementById("direction");
const inputLanguage = document.getElementById("lenguages");
const inputAbout = document.getElementById("about");
const inputSkill = document.getElementById("knowledge");
const inputExperience = document.getElementById("experience");
const inputEducation = document.getElementById("education");
const inputCertification = document.getElementById("certification");


function Clear(){
inputName.value = "";
inputName.classList.remove("input-error");
inputName.classList.remove("input-success");
inputName.focus();

inputLastName.value = "";
inputLastName.classList.remove("input-error");
inputLastName.classList.remove("input-success");

inputPhone.value = "";
inputPhone.classList.remove("input-error");
inputPhone.classList.remove("input-success");

inputEmail.value = "";
inputEmail.classList.remove("input-error");
inputEmail.classList.remove("input-success");

inputDirection.value = "";
inputDirection.classList.remove("input-error");
inputDirection.classList.remove("input-success");

inputLanguage.value = "";
inputLanguage.classList.remove("input-error");
inputLanguage.classList.remove("input-success");

inputAbout.value = "";
inputAbout.classList.remove("input-error");
inputAbout.classList.remove("input-success");

inputSkill.value = "";
inputSkill.classList.remove("input-error");
inputSkill.classList.remove("input-success");

inputExperience.value = "";
inputExperience.classList.remove("input-error");
inputExperience.classList.remove("input-success");

inputEducation.value = "";
inputEducation.classList.remove("input-error");
inputEducation.classList.remove("input-success");

inputCertification.value = "";
inputCertification.classList.remove("input-error");
inputCertification.classList.remove("input-success");

}


function CreateCv(){

    const CvContainer = document.getElementById("Cv-Container");

    if(Validate()){

        //nombre
    const valueName = inputName.value;

    //apellido
    const valueLastName = inputLastName.value;

    //telefono
    const valuePhone = inputPhone.value;

    //email
    const valueEmail = inputEmail.value;

    //direccion
    const valueDirection = inputDirection.value;


    //Idioma
    const valueLanguage = inputLanguage.value;

    //acerca de ti
    const valueAbout = inputAbout.value;

    //habilidades
    const valueSkill = inputSkill.value;


    //experiencia
    const valueExperience = inputExperience.value;
    
    //educación
    const valueEducation = inputEducation.value;


    //certificación
    const valueCertification = inputCertification.value;

        
        
        const divCol=document.createElement("div");
        divCol.setAttribute("class", "col-6 col-sm-6 col-md-6 offset-3 mt-2 mb-2");

        const divMainCard=document.createElement("div");
        divMainCard.setAttribute("class", "card");

        const divCardHeader=document.createElement("div");
        divCardHeader.setAttribute("class", "card-header bg-primary text-light");
        
        const h5CardHeader=document.createElement("h5");
        h5CardHeader.setAttribute("class", "text-center fw-bold");
        h5CardHeader.innerText = "Curriculum-Vitae";

        const divCardBody=document.createElement("div");
        divCardBody.setAttribute("class", "card-body");

        const divCardUl=document.createElement("div");
        divCardUl.setAttribute("class", "card");

        const UlCardbody=document.createElement("ul");
        UlCardbody.setAttribute("class", "list-group list-group-flush");

        const liName=document.createElement("li");
        liName.setAttribute("class", "list-group-item");
        liName.innerText = `Nombre(s): ${valueName}`;

        const liLastName=document.createElement("li");
        liLastName.setAttribute("class", "list-group-item");
        liLastName.innerText = `Apellido(s): ${valueLastName}`;
        
        const liPhone=document.createElement("li");
        liPhone.setAttribute("class", "list-group-item");
        liPhone.innerText = `Teléfono: ${valuePhone}`;

        const liEmail=document.createElement("li");
        liEmail.setAttribute("class", "list-group-item");
        liEmail.innerText = `Email:${valueEmail}`;

        const liDirection=document.createElement("li");
        liDirection.setAttribute("class", "list-group-item");
        liDirection.innerText = `Dirección: ${valueDirection}`;

        const liLanguages=document.createElement("li");
        liLanguages.setAttribute("class", "list-group-item");
        liLanguages.innerText = `Idiomas:${valueLanguage}`;

        const liAbout=document.createElement("li");
        liAbout.setAttribute("class", "list-group-item");
        liAbout.innerText =`Acerca de ti: ${valueAbout}`;

        const liSkills=document.createElement("li");
        liSkills.setAttribute("class", "list-group-item");
        liSkills.innerText =`Skills/Habilidades: ${valueSkill}`;

        const liExperience=document.createElement("li");
        liExperience.setAttribute("class", "list-group-item");
        liExperience.innerText =`Experiencia: ${valueExperience}`;

        const liEducation=document.createElement("li");
        liEducation.setAttribute("class", "list-group-item");
        liEducation.innerText =`Educación: ${valueEducation}`;

        const liCertication=document.createElement("li");
        liCertication.setAttribute("class", "list-group-item");
        liCertication.innerText =`Certificación: ${valueCertification}`;

        const BtnDelete=document.createElement("button");
        BtnDelete.type = "button"; 
        BtnDelete.setAttribute("class", "btn btn-outline-danger float-end mt-2");
        BtnDelete.innerText ="Eliminar";
        BtnDelete.addEventListener("click",function(){

            if(confirm("Seguro que quieres eliminar tu CV?")){
                CvContainer.removeChild(divCol);
            }
        })

        UlCardbody.appendChild(liName);
        UlCardbody.appendChild(liLastName);
        UlCardbody.appendChild(liPhone);
        UlCardbody.appendChild(liEmail);
        UlCardbody.appendChild(liDirection);
        UlCardbody.appendChild(liLanguages);
        UlCardbody.appendChild(liAbout);
        UlCardbody.appendChild(liSkills);
        UlCardbody.appendChild(liExperience);
        UlCardbody.appendChild(liEducation);
        UlCardbody.appendChild(liCertication);

        divCardUl.appendChild(UlCardbody);

        divCardBody.appendChild(divCardUl);
        divCardBody.appendChild(BtnDelete);

        divCardHeader.appendChild(h5CardHeader);

        divMainCard.appendChild(divCardHeader);
        divMainCard.appendChild(divCardBody);

        divCol.appendChild(divMainCard);

        CvContainer.appendChild(divCol);

        Clear();
 
    }else{
        alert("Favor completar toda la información.");
    }
}


function Validate(){
    
    let isValid = true;

     //nombre
    const valueName = inputName.value;

    //apellido
    const valueLastName = inputLastName.value;

    //telefono
    const valuePhone = inputPhone.value;

    //email
    const valueEmail = inputEmail.value;

    //direccion
    const valueDirection = inputDirection.value;


    //Idioma
    const valueLanguage = inputLanguage.value;

    //acerca de ti
    const valueAbout = inputAbout.value;

    //habilidades
    const valueSkill = inputSkill.value;


    //experiencia
    const valueExperience = inputExperience.value;
    
    //educación
    const valueEducation = inputEducation.value;


    //certificación
    const valueCertification = inputCertification.value;


    //nombre
    if(valueName == "" || valueName == null || valueName == undefined){
      inputName.classList.add("input-error");
      inputName.classList.remove("input-success");
      isValid = false;
     }else{
        inputName.classList.remove("input-error");
        inputName.classList.add("input-success");
    }

    //apellido

    if(valueLastName == "" || valueLastName == null || valueLastName == undefined){
        inputLastName.classList.add("input-error");
        inputLastName.classList.remove("input-success");
        isValid = false;
       }else{
        inputLastName.classList.remove("input-error");
        inputLastName.classList.add("input-success");
      }

      //telefono

      if(valuePhone == "" || valuePhone == null || valuePhone == undefined){
        inputPhone.classList.add("input-error");
        inputPhone.classList.remove("input-success");
        isValid = false;
       }else{
        inputPhone.classList.remove("input-error");
        inputPhone.classList.add("input-success");
      }

      //email
      if(valueEmail == "" || valueEmail == null || valueEmail == undefined){
        inputEmail.classList.add("input-error");
        inputEmail.classList.remove("input-success");
        isValid = false;
       }else{
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-success");
      }

       //direccion
      if(valueDirection == "" || valueDirection == null || valueDirection == undefined){
        inputDirection.classList.add("input-error");
        inputDirection.classList.remove("input-success");
        isValid = false;
       }else{
        inputDirection.classList.remove("input-error");
        inputDirection.classList.add("input-success");
      }

      //Idioma

      if(valueLanguage == "" || valueLanguage == null || valueLanguage == undefined){
        inputLanguage.classList.add("input-error");
        inputLanguage.classList.remove("input-success");
        isValid = false;
       }else{
        inputLanguage.classList.remove("input-error");
        inputLanguage.classList.add("input-success");
      }


      //acerca de ti

      if(valueAbout == "" || valueAbout == null || valueAbout == undefined){
        inputAbout.classList.add("input-error");
        inputAbout.classList.remove("input-success");
        isValid = false;
       }else{
        inputAbout.classList.remove("input-error");
        inputAbout.classList.add("input-success");
      }

      //habilidades


      if(valueSkill == "" || valueSkill == null || valueSkill == undefined){
        inputSkill.classList.add("input-error");
        inputSkill.classList.remove("input-success");
        isValid = false;
       }else{
        inputSkill.classList.remove("input-error");
        inputSkill.classList.add("input-success");
      }


      //experiencia

      if(valueExperience == "" || valueExperience == null || valueExperience == undefined){
        inputExperience.classList.add("input-error");
        inputExperience.classList.remove("input-success");
        isValid = false;
       }else{
        inputExperience.classList.remove("input-error");
        inputExperience.classList.add("input-success");
      }


      //educación

      if(valueEducation == "" || valueEducation == null || valueEducation == undefined){
        inputEducation.classList.add("input-error");
        inputEducation.classList.remove("input-success");
        isValid = false;
       }else{
        inputEducation.classList.remove("input-error");
        inputEducation.classList.add("input-success");
      }
      
      //certificación
      if(valueCertification == "" || valueCertification == null || valueCertification == undefined){
        inputCertification.classList.add("input-error");
        inputCertification.classList.remove("input-success");
        isValid = false;
       }else{
        inputCertification.classList.remove("input-error");
        inputCertification.classList.add("input-success");
      }

      if(!isValid){
        alert("Favor completar toda la información.");
      }

      return isValid;
}