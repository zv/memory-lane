/**
   A predicate function for determining if a story is or is not valid
 **/
function isValidStory(current, story) {
    // check if our story is within 10 degrees kelvin of the current temperature
    if ((story.temp < (current.temp - 10)) && ((story.temp > (current.temp + 10)))) {
        return true;
    } else {
        return false
    }
}
