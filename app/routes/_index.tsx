import type { MetaFunction } from "@remix-run/node";
import MainDomainSearch from "~/components/MainDomainSearch";

export const meta: MetaFunction = () => {
  return [
    { title: "VDS Center - I'm VDS", url: "/" },
    { name: "description", content: "Welcome to VDS.im !" },
  ];
};

export default function Index() {
  return (
    <main>
      <MainDomainSearch />
    </main>
  );
}
