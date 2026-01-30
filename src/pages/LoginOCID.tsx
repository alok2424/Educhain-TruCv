import { useOCAuth } from "@opencampus/ocid-connect-js";

const LoginOCID: React.FC = () => {
  const { ocAuth, isInitialized } = useOCAuth();

  const handleLogin = (): void => {
    if (!isInitialized) {
      console.log("OCID SDK not initialized yet");
      return;
    }

    console.log("Starting OCID login...");
    ocAuth.signInWithRedirect({ state: "opencampus" });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>OCID Sandbox Testing</h2>

      <button onClick={handleLogin}>
        Login with Open Campus ID
      </button>
    </div>
  );
};

export default LoginOCID;
