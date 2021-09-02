import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, possimus!
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon fas fa-trash"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Arsheet</b></span>
                    <span className="singlePostDate">Date: 1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deserunt maiores quas consequatur rem illum culpa iure sit asperiores fuga, laboriosam quia ut unde perspiciatis earum suscipit deleniti quisquam officia delectus animi distinctio fugit repudiandae accusamus. Aspernatur ullam libero magni vitae. Tenetur dolor itaque libero distinctio porro nulla ut voluptatibus pariatur assumenda autem aspernatur ratione eos dignissimos, adipisci reiciendis, officia consectetur veniam commodi maxime dolorum optio doloribus. Laborum, sed. Natus dolor saepe omnis libero, quisquam quo voluptates, consequatur expedita magni harum minima at culpa praesentium placeat molestiae ea esse. Quaerat sed consequuntur perferendis assumenda impedit, natus et. Cum, voluptates tempore?</p>
            </div>
            
        </div>
    )
}
