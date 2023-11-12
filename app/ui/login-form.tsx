import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

import { lusitana } from "@/app/ui/fonts";

import { Button } from "./button";

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 px-6 pt-8 pb-4 bg-gray-50 rounded-lg">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="block mt-5 mb-3 text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                required
                className="block pl-10 w-full text-sm rounded-md border border-gray-200 peer py-[9px] outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <AtSymbolIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="block mt-5 mb-3 text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                required
                className="block pl-10 w-full text-sm rounded-md border border-gray-200 peer py-[9px] outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength={6}
              />
              <KeyIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex items-end space-x-1 h-8">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Link href="/dashboard">
      <Button className="mt-4 w-full">
        Log in <ArrowRightIcon className="ml-auto w-5 h-5 text-gray-50" />
      </Button>
    </Link>
  );
}
