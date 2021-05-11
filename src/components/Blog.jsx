import {useHistory} from "react-router-dom";
import {blogs} from "../data.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const Blog = () => {

    const history = useHistory();

    const handleSubmit = (blog) => {
        history.push('/blog', {blog: blog})
    }

    const right = <FontAwesomeIcon icon={faArrowRight}/>

    return (
        <section className="mx-48 text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-16 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {blogs.slice(0, 5).map((blog, key) => (
                        <div key={key} className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">
                                    {blog.category}
                                </span>
                                <span className="mt-1 text-gray-500 text-sm">
                                    {blog.date}
                                </span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                    {blog.title}
                                </h2>
                                <p className="overflow-ellipsis overflow-hidden ...">
                                    {blog.headerContent}
                                </p>
                                <div onClick={() => {
                                    handleSubmit(blog)
                                }}
                                     style={{cursor: 'pointer'}}
                                     className="text-yellow-500 inline-flex items-center mt-4">
                                    <div className="text-l mr-2">
                                        Read More
                                    </div>
                                    {right}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};