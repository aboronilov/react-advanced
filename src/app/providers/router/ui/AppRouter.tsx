import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="page-wrapper">{item.element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
