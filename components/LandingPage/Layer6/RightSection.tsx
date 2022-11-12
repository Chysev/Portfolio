// Components
import FacebookCard from "../../Cards/FacebookCard"
import DiscordCard from "../../Cards/DiscordCard"
import GitHubCard from "../../Cards/GitHubCard"
import InstagramCard from "../../Cards/InstagramCard"

const RightSection = () => {
    return (
        <div className="grid grid-cols-2 992max:grid-cols-1">
            <FacebookCard />
            <DiscordCard />
            <GitHubCard />
            <InstagramCard />
        </div>
    )
}

export default RightSection;