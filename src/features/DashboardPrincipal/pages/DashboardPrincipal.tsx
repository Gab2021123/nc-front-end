import DashboardProduct from "../components/DashboardProduct/DashboardProduct";
import DashboardView from "../components/DashboardView/DashboardView";

function DashboardPrincipal() {
  return (
    <div className="grid grid-cols-12">
      <DashboardProduct />
      <DashboardView />
    </div>
  );
}

export default DashboardPrincipal;
