const IsNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="bg-white shadow-xl rounded-xl lg:w-96 card">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const NoNews = () => {
    return (
        <div className="py-5 text-center">
            <h1>Berita Belum ada!</h1>
        </div>
    );
};

const NewsLists = ({ news }) => {
    // if (!news) {
    //     return NoNews();
    // }
    // return IsNews(news);

    // or
    return !news ? NoNews() : IsNews(news);
};

export default NewsLists;
