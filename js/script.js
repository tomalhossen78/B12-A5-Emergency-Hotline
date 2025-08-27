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
// eventlistener for card container
document.getElementById('card-container').addEventListener('click', function (event) {
    const cardItem = event.target.closest('.card-item');
    // increase the heart icon counter
    if (event.target.closest('.fa-heart')) {
        const heartCount = getElemetNumber('heart-count');
        setElement('heart-count', heartCount + 1);
    }
    // call button functionality
     const callButton = event.target.closest('.call-btn');
     if (callButton) {
        const serviceName = cardItem.querySelector('h3').innerText;
        const serviceNum = cardItem.querySelector('h1').innerText;
        const time = new Date().toLocaleTimeString();
        const coinCount = getElemetNumber('coin-count');
        if (coinCount < 20) {
            alert("❌Your coin is insufficent. You need 20 coins to make a call. ")
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
    // copy button funtionality
    const copyButton = event.target.closest('.copy-btn');
    if (copyButton) {
        // get number
        const number = cardItem.querySelector('h1').innerText;
        // aleart
        alert(number + " number is copied");
         // copy to clipboard
        navigator.clipboard.writeText(number);
        // increase copy count
        const copyCount = getElemetNumber('copy-count');
        setElement('copy-count', copyCount + 1);
    }

})

// clear button functionality
getElement('clear-btn').addEventListener('click', function () {
    const callList = getElement('call-history-container');
    callList.innerHTML = "";
})
