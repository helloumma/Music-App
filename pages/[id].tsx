import type { NextPage } from "next";
import { useRouter } from "next/router";

const Details: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return <div>Details for {id}</div>;
};

export default Details;
