import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Router from "next/router";
import { useRef } from "react";
import { Avatar } from "./Avatar";
import { HeaderOptions } from "./HeaderOptions";

export const Header = () => {
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    Router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form
          onSubmit={search}
          className="flex-1 flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-1 w-full focus:outline-none"
            defaultValue={Router.query.term}
          ></input>
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer hover:scale-125 duration-100"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            onClick={search}
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
          />
          <button hidden type="submit">
            search
          </button>
        </form>

        <Avatar
          className="ml-auto"
          url="https://placehold.jp/3d4070/ffffff/150x150.png"
        />
      </div>

      <HeaderOptions />
    </header>
  );
};
