import { Route } from "react-router-dom";
import ButtonHelp from "../../pages/help/ButtonHelp";
import  FormComponentsHelp  from "../../pages/help/FormComponentsHelp"; 
import  ToastDemo  from "../../pages/help/ToastDemo"; 
import BackgroundHelp from "../../pages/help/BackgroundHelp";

const DevRoutes = () => {
  return (
    <>
      <Route path="/dev/help/button" element={<ButtonHelp />} />
      <Route path="/dev/help/form" element={<FormComponentsHelp />} />
      <Route path="/dev/help/toast" element={<ToastDemo />} />
      <Route path="/dev/help/background" element={<BackgroundHelp />} />
    
        {/* Add more routes as needed */}
    </>
  );
};

export default DevRoutes;