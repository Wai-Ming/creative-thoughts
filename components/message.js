export default function Message({
  children,
  avatar,
  description,
  timestamp,
  user,
  username,
}) {
  return (
    <div className="bg-white p-8 border-b-2 rounded-lg my-2 mx-auto max-w-lg">
      <div className="flex items-center gap-2">
        <img src={avatar} alt="profile picture" className="w-10 rounded-lg" />
        <h2>{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
