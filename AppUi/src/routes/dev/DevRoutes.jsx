import { Route } from "react-router-dom";
import ButtonHelp from "../../pages/help/ButtonHelp";
import ToastDemo from "../../pages/help/ToastDemo";

const DevRoutes = () => {
  return (
    <>
      <Route path="/dev/help/button" element={<ButtonHelp />} />
      <Route path="/dev/help/toast" element={<ToastDemo />} />
    </>
  );
};

export default DevRoutes;
