import { useRouter } from "next/router";

export default function Car() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Your car is {id}</div>;
}
