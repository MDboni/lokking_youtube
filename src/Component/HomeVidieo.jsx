import { useNavigate } from "react-router-dom";

const HomeVidieo = ({ video }) => {
  const navigate = useNavigate();

  if (!video || video.length === 0) {
    return <p className="text-center mt-10">No videos found.</p>;
  }

  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {video.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(`/Details/${item.DetailID}`)}
            className="card w-full object-cover glass cursor-pointer hover:shadow-xl transition"
          >
            <figure>
              <img src={item.thumbnail} alt={item.title} />
            </figure>
            <div className="card-body">
              <div className="flex p-4">
                <div className="flex-shrink-0 w-12 h-12 mr-4">
                  <img
                    src={item.authors[0]?.profile_picture || ""}
                    alt={item.authors[0]?.profile_name || "Author"}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.authors[0]?.profile_name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeVidieo;
