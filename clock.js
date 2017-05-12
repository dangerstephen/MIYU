// Function that takes in a time of day (an hour and minute) and outputs the angle
// between the hour and minute hand of an analog clock at that time.
// The output can be in degrees or radians.

function angle_between_hour_and_minute_hand(hour, minute) {
    return Math.abs(((hour*30.0 + minute*0.5) - minute*6.0) % 360)
}



//TESTS
console.log("12:0", angle_between_hour_and_minute_hand(12, 30)); //0
console.log("3:0",  angle_between_hour_and_minute_hand(3, 0));
console.log("3:30", angle_between_hour_and_minute_hand(3, 30));
console.log("6:30", angle_between_hour_and_minute_hand(6, 30));
