import { ChangeEvent, useEffect, useState } from "react";
import { HelloRequest } from "./protos/api_pb";
import { apiClient } from "./services/api";

function App() {
  const [response, setResponse] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const req = new HelloRequest();
      req.setName(name);

      const resp = await apiClient.hello(req, {});
      setResponse(resp.getMessage());
    })();
  }, [name]);

  return (
    <div className="App">
      <div>gRPC Demo</div>
      <input type="text" onChange={handleOnChange} value={name} />
      <div>Response from server: {response}</div>
    </div>
  );
}

export default App;
