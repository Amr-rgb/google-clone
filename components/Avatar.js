export const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer hover:scale-110 duration-150 ${className}`}
      src={url}
      alt="profile pic"
    />
  );
};
