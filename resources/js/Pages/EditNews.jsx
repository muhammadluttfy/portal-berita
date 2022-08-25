import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.news.id,
            title,
            description,
            category,
        };

        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    // console.log("Edit", props);

    return (
        <div className="bg-gray-100">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            <div className="mx-4 my-16 md:md-0">
                <div className="mx-auto mb-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 rounded-lg">
                        <h1 className="m-2 text-2xl font-bold text-gray-700">
                            Edit Berita (Terakhir belajar : Part 4 | 1 Jam 12
                            Menit)
                        </h1>
                        <input
                            type="text"
                            placeholder="Judul"
                            className="w-full m-2 bg-gray-100 input input-bordered"
                            onChange={(title) => setTitle(title.target.value)}
                            defaultValue={props.news.title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="w-full m-2 bg-gray-100 input input-bordered"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            defaultValue={props.news.description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="w-full m-2 bg-gray-100 input input-bordered"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            defaultValue={props.news.category}
                        />

                        <button
                            className="px-6 m-2 btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            Update Postingan
                        </button>
                    </div>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>
        </div>
    );
}
