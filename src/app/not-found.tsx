import { Result } from "antd";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Result status="404"/>
    </div>
  );
}
