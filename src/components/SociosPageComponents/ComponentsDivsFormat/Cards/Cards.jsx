import React from "react";
import Card from "./DocumentationForm";
import FormCountSocios from "./FormCountSocio";
import FormSendGeneralDates from "./FormSendGeneralDates";

const DivsContainer= ()=> {
  return (
      <div className="containerSocios">
          <div className="row  d-flex ">
              <div className="col-md-4" >
                <FormSendGeneralDates  />
              </div>
              <div className="col-md-4" >
                <Card  />
              </div>
              <div className="col-md-4" >
                <FormCountSocios  />
              </div>
        </div>
      </div>
  );
}

export default DivsContainer;