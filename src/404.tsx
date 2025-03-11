import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();
  const asPath = router.asPath;

  let message;
  if (asPath.startsWith("/docs/")) {
    message = "The document you are looking for does not exist.";
  } else {
    message = "The page you are looking for does not exist.";
  }

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>{message}</p>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  );
}
