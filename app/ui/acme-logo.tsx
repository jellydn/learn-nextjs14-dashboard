import { GlobeAltIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

import { lusitana } from "./fonts";

export default function AcmeLogo() {
  return (
    <Link href="/">
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <GlobeAltIcon className="w-12 h-12 rotate-[15deg]" />
        <p className="text-[44px]">Acme</p>
      </div>
    </Link>
  );
}
