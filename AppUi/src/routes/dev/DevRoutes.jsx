import { Route } from "react-router-dom";
import ButtonHelp from "../../pages/help/ButtonHelp";

const DevRoutes = () => {
  return (
    <>
      <Route path="/dev/help/button" element={<ButtonHelp />} />
    </>
  );
};

export default DevRoutes;
