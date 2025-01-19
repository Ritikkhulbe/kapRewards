import { Navigate, Route, Routes } from "react-router-dom";
import routesConfig from "./routesConfig";
import SettingsRoutes from "@/app/features/settings/SettingsRoutes";
import { withPublicUrl } from "@/util";
import ProductPage from "@/app/components/Products";
import OrderPage from "@/app/components/OrderPage";

const RootRouter = () => {
  return (
    <Routes>
      {/* Redirect from root to a default route, if needed */}
      <Route
        path={"/"}
        element={<Navigate to={withPublicUrl("/dashboard")} replace />}
      />

      {/* Map through routesConfig to create Route components */}
      {routesConfig.map((route) => (
        <Route
          key={route.path}
          path={withPublicUrl(route.path)}
          element={<route.element />}
        />
      ))}

      <Route path={withPublicUrl("/settings")} element={<SettingsRoutes />} />

      <Route path={withPublicUrl("/products")} element={<ProductPage />} />

      <Route path={withPublicUrl("/order")} element={<OrderPage />} />
    </Routes>
  );
};

export default RootRouter;
