import { Result } from "antd";

export default function NotFound() {
  return (
    <div>
      <Result  title="Not Found" subTitle="Could not find requested resource" status="404"/>
    </div>
  );
}
