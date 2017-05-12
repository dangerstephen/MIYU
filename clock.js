function angle_between_hour_and_minute_hand(hour, minute) {
  return Math.abs((hour * 30 + minute * 0.5) - (minute * 6))
}

//TESTS
console.log("12:0", angle_between_hour_and_minute_hand(12, 0));
console.log("3:0",  angle_between_hour_and_minute_hand(3, 0));
console.log("3:30", angle_between_hour_and_minute_hand(3, 30));
console.log("6:30", angle_between_hour_and_minute_hand(6, 30));
