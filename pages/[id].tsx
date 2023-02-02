import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const id = router.query.id;
  return <div>Details for {id}</div>;
};

export default Details;
