import { useOCAuth } from "@opencampus/ocid-connect-js";

const DashboardOCID: React.FC = () => {
  const { authState, OCId, ethAddress, logout } = useOCAuth();

  return (
    <div>
      <h2>Login Successful 🎉</h2>

      <pre>{JSON.stringify(authState, null, 2)}</pre>

      <p><b>OCID:</b> {OCId}</p>
      <p><b>Wallet:</b> {ethAddress}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardOCID;
