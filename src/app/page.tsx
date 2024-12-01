import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      Click &nbsp;
      <Link href="/documents/123">
        <span className="text-blue-300 underline">here</span>
      </Link>
      &nbsp; to go to document id
    </div>
  );
};

export default Home;
