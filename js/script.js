/**
 * @author Raj Sinha <akashsinha3008@gmail.com>
 */
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

// Set the date we're counting down to
var countDownDate = new Date("January 26, 2025 18:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="time"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" +
        "<div class='hours block'>" + hours + "<br>Hours</div>" +
        "<div class='minutes block'>" + minutes + "<br>Minutes</div>" +
        "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the countdown is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for a happy life!";
    }
}, 1000);

// Play audio immediately after the page loads
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("my_audio");
    audio.muted = true; // Initially muted to bypass autoplay restriction
    audio.play().then(() => {
        audio.muted = false; // Unmute after the audio starts playing
    }).catch(error => {
        console.error("Autoplay failed due to browser restrictions:", error);
    });
});

// Console messages for a fun touch
var styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 26th January, 2025!', styles);
console.log('%cYour presence is requested!%c\n\nRegards: Raj Sinha', styles1, styles2);
console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold'
);
