/** @format */

import Navbar from "./Navbar";
export default function Layout({ children, home }) {
  console.log({ home });
  return (
    <div>
      {home && <Navbar />}
      {children}
    </div>
  );
}
