import GitHubCalendar from "react-github-calendar";

export default function GithubActivityCalendar(){
    return(
        <GitHubCalendar
            username="JuanZuniga79"
            colorScheme="light"
            blockRadius={6}
            blockSize={16}
            fontSize={16}
            hideMonthLabels={true}
            weekStart={1}
        />
    )
}