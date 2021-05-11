import {useHistory, useLocation} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export const BlogContent = () => {
    const location = useLocation();
    const blog = location.state.blog;
    const history = useHistory();
    const left = <FontAwesomeIcon icon={faArrowLeft}/>
    return (
        <div className="mt-16 md:w-8/12 mx-auto px-8">
            <button onClick={() => history.goBack()}
                    className="text-yellow-500 inline-flex items-center mt-4">
                {left}
                <div className="text-xl ml-2">
                    Back
                </div>
            </button>

            <div className="text-center">
                <span className="block text-xl text-gray-600 leading-tight">
                {blog.category}
                </span>
                <span className="mt-2 block text-5xl font-bold leading-none">
                {blog.title}
                </span>
                <span className="my-8 block text-xl text-gray-600 leading-tight">
                {blog.date}
                </span>
                <span className="text-xl text-gray-600">
                {blog.content}
                </span>
            </div>
        </div>
    )
};