import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    console.log("====================================");
    console.log("meta:", meta);
    console.log("====================================");

    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev && (
                <Link href={prev} className="btn">
                    «
                </Link>
            )}
            <Link className="btn">{current}</Link>
            {next && (
                <Link href={next} className="btn">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
