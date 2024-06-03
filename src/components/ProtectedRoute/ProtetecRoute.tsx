import { Navigate, Outlet } from "react-router-dom";
interface Props {
  isAllowed: boolean;
  children?: React.ReactNode;
}
function ProtetecRoute({ isAllowed, children }: Props) {
  if (!isAllowed) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
  return children ? <>{children}</> : <Outlet />;
}

export default ProtetecRoute;
