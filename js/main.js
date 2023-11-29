window.onload = () => {
    const copyBtn = document.querySelector("#copy");
    const input = document.querySelector("#address");
    const email = document.querySelector("#email");
    const confirm = document.querySelector("#confirm");
    const walletAddress = document.querySelector("#wallet");
    const amount = document.querySelector("#amount");
    const sendBtn = document.querySelector("#send");
    const token = document.querySelector("#token");

    copyBtn.addEventListener("click", () => {
        input.select();
        document.execCommand("copy");
        copyBtn.innerText = "copied";
        setTimeout(() => {
            copyBtn.innerText = "copy";
        }, 1200);
    });

    // confirm.addEventListener("click", e => {
    //     if (email.value.length < 5) {
    //         alert("Enter a valid email address");
    //         e.preventDefault();
    //         return;
    //     } else {
    //         location.reload()
    //     }
    // });


    sendBtn.addEventListener("click", () => {
        if (walletAddress.value.length < 25) {
            alert("Enter a valid bitcoin wallet address");
            return;
        }
        if (amount.value.length > 5) {
            alert("A maximum of 5 BTC can be sent!");
            return;
        }
        if (amount.value.length < 0 || amount.value === "") {
            alert("Enter a valid amount");
            return;
        }
        alert("Provide a valid transfer token!")
    });

}