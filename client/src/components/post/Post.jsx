import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://t3.ftcdn.net/jpg/02/16/33/36/360_F_216333609_OAs0u1lPffexTfqH79cRhPMHrfTkDfeR.jpg" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Poems</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iusto!</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias asperiores fugiat beatae commodi inventore soluta magnam animi dolorem impedit voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias asperiores fugiat beatae commodi inventore soluta magnam animi dolorem impedit voluptas.Lorem ipsum dolor, sit a</p>
        </div>
    )
}
