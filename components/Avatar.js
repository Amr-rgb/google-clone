export const Avatar = ({ url }) => {
  return (
    <img
      loading="lazy"
      className="h-10 rounded-full cursor-pointer hover:scale-110 duration-150"
      src={url}
      alt="profile pic"
    />
  );
};
