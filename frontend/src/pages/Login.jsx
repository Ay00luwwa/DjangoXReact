import Form from "../components/Form";

function Login() {
  return (
    <div>
      <Form route="api/token/" method="login" />
      <p>default username and password: test</p>
    </div>
  );
}

export default Login;
