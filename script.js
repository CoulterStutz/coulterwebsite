let t_title = document.getElementById("t_title")

function animate_title_text(message, delay_time) {
    let i = 0;
    let interval = setInterval(function() {
      if (i < message.length) {
        t_title.innerHTML += message.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay_time / message.length);
}

function rev_animate_title_text(delay_time) {
    let message = t_title.innerHTML;
    let i = message.length - 1;
    let interval = setInterval(function() {
      if (i >= 0) {
        t_title.innerHTML = t_title.innerHTML.slice(0, -1);
        i--;
      } else {
        clearInterval(interval);
      }
    }, delay_time / message.length);
}

const title_animation_text = {
    1: "Python Flask and Socket",
    2: "Fullstack Web Dev",
    3: "AWS Cloud Practitioner",
    4: "Cloud Automation and Devops",
    5: "CompTIA A+",
    6: "CompTIA Net+",
    7: "Cryptography",
    8: "Linux", 
    9: "Cisco CCNA",
    10: "Android App Developer",
    11: "Proficient in Git",
    13: "Server Management and Hosting",
    14: "CyberSecurity",
    15: "Networking",
    16: "Windows Server + AD Experience",
    17: "Algorithmic Automation in Python",
    18: "Deep Learning"
};

function animate() {
    const keys = Object.keys(title_animation_text);
    const shuffledKeys = shuffleArray(keys);

    function animateNext(index = 0) {
        if (index >= shuffledKeys.length) {
            return;
        }

        const key = shuffledKeys[index];
        const message = title_animation_text[key];

        animate_title_text(message, 1000);

        setTimeout(function() {
            rev_animate_title_text(1000);
        }, 2000);

        setTimeout(function() {
            animateNext(index + 1);
        }, 4000);
    }

    animateNext();
}

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

  

window.onload = function(){
    setTimeout(function() { animate() }, 1500)
}