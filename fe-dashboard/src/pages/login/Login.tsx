import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();


  return (
    <div>
      <h1>Login</h1>
      <Link href="/dashboard">dash2</Link>
      <br />
      <button onClick={() => router.push("/dashboard")}>Dash3</button>
    </div>
  );
}

export default Login;
