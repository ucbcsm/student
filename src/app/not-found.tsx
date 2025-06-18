import { Button, Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Result
        title="Non trouvé"
        subTitle="Impossible de trouver la ressource demandée"
        status="404"
        extra={
          <Link href="/app">
            <Button type="primary">Retour à l'accueil</Button>
          </Link>
        }
      />
    </div>
  );
}