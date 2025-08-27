// helper function 
function getElement(id) {
    return document.getElementById(id);
}
function getElemetText(id) {
    return document.getElementById(id).innerText;
}
function getElemetNumber(id) {
    return parseInt(document.getElementById(id).innerText);
}

function setElement(id, value) {
    document.getElementById(id).innerText = value;
}


// increase the heart icon counter

document.getElementById('card-container').addEventListener('click', function (event) {
    if (event.target.className.includes('fa-heart')) {
        const heartCount = getElemetNumber('heart-count');
        setElement('heart-count', heartCount + 1);
    }
})

// call button functionality
document.getElementById('card-container').addEventListener('click', function (event) {
    if (event.target.className.includes('call-btn')) {
        const serviceName = event.target.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNum = event.target.parentNode.parentNode.children[2].children[0].innerText;
        const time = new Date().toLocaleTimeString();
        const coinCount = getElemetNumber('coin-count');
        if (coinCount < 20) {
            alert("❌Your coin is insufficent. You 20 coins to make a call. ")
        }
        else {
            alert("✅calling " + serviceName + " " + serviceNum);
            const remaingCoin = coinCount - 20;
            setElement('coin-count', remaingCoin);
            // call history parent
            const callList = getElement('call-history-container');
            //    create element
            const newCall = document.createElement('div');
            newCall.classList.add("flex", "bg-[#FAFAFA]", "p-4", "m-4", "justify-between", "items-center");
            newCall.innerHTML = `<div>
                            <p class="font-bold text-lg">${serviceName}</p>
                            <p class="text-xl font-medium">${serviceNum}</p>
                        </div>
                        <p>${time}</p>`;
            // add element to top
            callList.prepend(newCall);

        }

    }
})

// clear button functionality
getElement('clear-btn').addEventListener('click', function () {
    const callList = getElement('call-history-container');
    callList.innerHTML = "";
})
// copy button funtionality
document.getElementById('card-container').addEventListener('click', function (event) {
    if (event.target.className.includes('copy-btn')) {
        const copyCount = getElemetNumber('copy-count');
        setElement('copy-count', copyCount + 1);
        // get number
        const number = event.target.parentNode.parentNode.children[2].children[0].innerText;
        // aleart
        alert(number + " number is copied");
        const btnText = event.target.parentNode.children[0];
          // copy to clipboard
        navigator.clipboard.writeText(number);
    }
})