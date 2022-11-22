import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // console.log("use effect ran");
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooooopss........</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go to the{" "}
        <Link href="/" legacyBehavior>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
