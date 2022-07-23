export const Footer = () => {
  return (
    <footer className="mt-auto grid w-full divide-y divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">Egypt</div>
      <div className="flex flex-col md:flex-row md:justify-evenly xl:justify-between gap-y-4 px-8 py-3">
        <div className="flex justify-center space-x-8 whitespace-nowrap">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};
