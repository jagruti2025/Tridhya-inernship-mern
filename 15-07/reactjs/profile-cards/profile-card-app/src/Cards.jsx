import ProfileCard from "./ProfileCard";
import "./App.css";

export default function Cards() {
    return (
        <div className="cards">
            <ProfileCard name={"ciya Ahir"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtL5fMMuACuLU5UgKn6DQZGoLTesHnX--y2I5BInzvA&s=10"} role={"Frontend Developer"} bio={"Passionate about building responsive and user-friendly web applications using React."} followers={120} />
            <ProfileCard name={"Priya Patel"} image={"https://t3.ftcdn.net/jpg/09/37/60/02/360_F_937600227_RlGrfMocC7StqnaR1CZPb4Bs2xjKfy4c.jpg"} role={"UI/UX Designer"} bio={"Designs clean, modern, and intuitive user interfaces with a focus on user experience."} followers={159} />
            <ProfileCard name={"trisha varma"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDDvZkx7X9dJYlm2cZnQqAsziMkFeAxwMsAupFmy8nQ&s=10"} role={"Full Stack Developer"} bio={"Experienced in developing complete web applications using the MERN stack."} followers={191} />
            <ProfileCard name={"Rahi patel"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIPrpEXYzjEFrNJqcLw_zzdgy6Z4DD5zCp5nyVNgmOg&s=10"} role={"Backend Developer"} bio={"Enjoys creating scalable APIs and working with Node.js, Express, and MongoDB."} followers={119} />
        </div>
    );
}