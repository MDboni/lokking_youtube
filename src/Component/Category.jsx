
const Category = ({category}) => {

    if (!category || category.length === 0) {
        return <p className="text-center mt-10">No videos found.</p>;
      }

  return (
    <div>
        <div className="container mx-auto my-16 p-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Link className="card w-full  object-cover glass">
                <figure><img src={''} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{''}</h2>
                    <p>{''}</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Category