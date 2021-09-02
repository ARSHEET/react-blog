import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/236x/c5/48/53/c54853ecb75b0572155f7aa181e9c460.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid est minima alias. </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>  
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Technology</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>  
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-linkedin"></i>
            </div>
            </div>
        </div>
    )
}
