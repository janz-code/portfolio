import GitHubCalendar from "react-github-calendar";

export default function GithubActivityCalendar(){
    return(
        <GitHubCalendar
            username="JuanZuniga79"
            colorScheme="light"
            blockRadius={5}
            blockSize={14}
            fontSize={14}
            hideMonthLabels={true}
        />
    )
}