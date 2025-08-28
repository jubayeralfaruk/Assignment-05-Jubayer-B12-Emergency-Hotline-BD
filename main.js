
function getId(id){
    return document.getElementById(id);
}

//  //service-section
getId("service-section").addEventListener("click", function (e) {
    // calling number
    if (e.target.className.includes("btn-call")) {
        const coin =  getId("coin-box").innerText
        if (coin <= 0) {
            alert("❌ You don't have enough coin. You need at least 20 coins to make a call.");
            return;
        }
        const callBtn = e.target;
        const serviceName = callBtn.parentElement.parentElement.children[1].children[0].innerText 
        const serviceContact = callBtn.parentElement.parentElement.children[2].children[0].innerText 
        alert(`📞Calling ${serviceName} ${serviceContact}`);
        const callCoinSpan = Number(coin) - 20;
        getId("coin-box").innerText = callCoinSpan;

        const historyDiv = document.createElement("div");

        historyDiv.innerHTML = `
            <div class="bg-[#FAFAFA] flex justify-between items-center gap-4 p-4 rounded-lg">
                <div class="">
                    <h3 class="font-semibold text-[18px] text-[#111111]">${serviceName}</h3>
                    <p class="text-[18px] text-[#5C5C5C]">${serviceContact}</p>
                </div>
                <p class="text-[18px]">
                    ${new Date().toLocaleTimeString()}
                </p>
            </div>
        `
        const callHistoryListDiv = getId("call-history-list");

        callHistoryListDiv.appendChild(historyDiv);        
    }


    // // copy number
    if (e.target.className.includes("btn-copy")) {
        const copyBtn = e.target
        const serviceContact = copyBtn.parentElement.parentElement.children[2].children[0].innerText;

        navigator.clipboard.writeText(serviceContact);
        const copyCountNumber = getId("copyCount").innerText;
        const count = Number(copyCountNumber) + 1;
        alert(`Number Copied: ${serviceContact}`)
        getId("copyCount").innerText = count;
        
    }

    //heart
    if (e.target.className.includes("heart-btn")) {
        const heartCount = getId("heart-count").innerText;
        const newHeartCount = Number(heartCount) + 1;
        getId("heart-count").innerText = newHeartCount;
    }
    
})

// clear history
getId("clearHistory").addEventListener("click", function () {
    getId("call-history-list").innerHTML = '';
})