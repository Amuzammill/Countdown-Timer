import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userinput",
    type: "number",
    message: "Please enter the amount of second"
});
let input = res.userinput;
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTimer = new Date(inTime);
    setInterval((() => {
        const currTimer = new Date();
        const timeDiff = differenceInSeconds(intervalTimer, currTimer);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min}:${sec}`);
    }), 1000);
}
startTime(input);
