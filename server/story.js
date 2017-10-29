/**
 * story.js
 * @author Zephyr Pellerin
 * @author Shay 'Q0di'
 */


// polyfill `fetch` so that we can use this code in the browser as well
require('es6-promise').polyfill();
require('isomorphic-fetch');

var provider_api_url = module.exports.provider_api_url = 'https://890407d7-e617-4d70-985f-01792d693387.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token';

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

function *fetchStories() {
    // fetch our local stories
    const SAN_DIEGO = {
        "lat" : 32.7157,
        "lng" : -117.1611
    }
    return {
        stories: [
            {
                "name": "in west philadelphia...",
                "clip": 'http://baseshare.com/uploads/songs/06012015/Cousin%20Stizz%20-%20Fresh%20Prince_DigitalDripped.com.mp3',
                "location": [SAN_DIEGO],
                "radius": 1000,
                "created_at": Date.now()
            }
        ]
    }
}
