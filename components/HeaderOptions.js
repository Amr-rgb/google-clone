import { HeaderOption } from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export const HeaderOptions = () => {
  return (
    <div className="flex w-full justify-evenly text-gray-700 text-sm lg:text-base lg:justify-start lg:pl-52 lg:space-x-36 border-b">
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-4">
        <div className="link">Settings</div>
        <div className="link">Tools</div>
      </div>
    </div>
  );
};
