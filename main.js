// const { createElement } = require("react");


function getId(id){
    return document.getElementById(id);
}

//  //service-section
getId("service-section").addEventListener("click", function (e) {
    // calling
    if (e.target.className.includes("btn-call")) {
        const coin =  getId("coin-box").innerText
        if (coin <= 0) {
            alert("You haven't enough coin......");
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
            <div class="bg-[#FAFAFA] flex justify-between items-center gap-4 p-4">
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
        getId("copyCount").innerText = count;

    }
    
})