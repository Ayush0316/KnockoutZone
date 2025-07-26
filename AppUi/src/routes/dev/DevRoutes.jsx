import { Route } from "react-router-dom";
import ButtonHelp from "../../help/ButtonHelp";
import  FormComponentsHelp  from "../../help/FormComponentsHelp"; 
import ToastDemo from "../../pages/help/ToastDemo";

const DevRoutes = () => {
  return (
    <>
      <Route path="/dev/help/button" element={<ButtonHelp />} />
      <Route path="/dev/help/form" element={<FormComponentsHelp />} />
      <Route path="/dev/help/toast" element={<ToastDemo />} />
        {/* Add more routes as needed */}
    </>
  );
};

export default DevRoutes;