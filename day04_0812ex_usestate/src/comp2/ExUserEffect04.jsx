import React, { useEffect, useState } from "react";

const ExUserEffect04 = () => {
    const [posts, SetPosts] = useState([])
    useEffect(() => {

        // fetch API
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => SetPosts(data))
    }, [])

    return (
        <div>
            <h3>게시글 목록</h3>
            <hr />
            <ul>
                {
                    posts.map((p) => (
                        <li key={p.id}>{p.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ExUserEffect04;