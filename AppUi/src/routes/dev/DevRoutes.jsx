import { Route } from "react-router-dom";
import ButtonHelp from "../../help/ButtonHelp";
import  FormComponentsHelp  from "../../help/FormComponentsHelp"; 

const DevRoutes = () => {
  return (
    <>
      <Route path="/dev/help/button" element={<ButtonHelp />} />
      <Route path="/dev/help/form" element={<FormComponentsHelp />} />
      {/* Add more routes as needed */}
    </>
  );
};

export default DevRoutes;