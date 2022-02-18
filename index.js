const container = document.querySelector(`.container`);
toast = container.querySelector(`.toast`);
title = container.querySelector(`span`);
wifiIcon = container.querySelector(`.icon`);
subTitle = container.querySelector(`p`);
closeIcon = container.querySelector(`.close-icon`);

window.onload = () => { // When Window Is Loaded
function ajax()
{
    let xhr = new XMLHttpRequest(); // Creating new xml object.
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // Sending GET Request to the URL

    xhr.onload = ()=>{ // Once Ajax loaded

        // If user is online then the status code will be 200 or less than 300.
        // If not then the user is offline

        if (xhr.status == 200 && xhr.status < 300) {
            toast.classList.remove(`offline`); // removes the offline class that we added
            title.innerText = `You're Online Now`;
            subTitle.innerText = `Hurray! Internet Is Connected`;
            wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`;
            closeIcon.addEventListener(`click`, ()=>{
                container.classList.add(`hide`);
            })
            // console.log(`Online`);

            setTimeout(() => {
                container.classList.add(`hide`);  
            }, 5000); // after 5 s toast will be gone automatically
        }
        else
        { // User isn't online or getting error
            offline(); // Calling Offline function when not connected to internet or error occured.
        }
        
        // console.log(xhr.response)
    }
    xhr.onerror = ()=>{
   offline(); // Calling Offline function when not connected to internet or error occured.
    }
    xhr.send();
}

function offline()
{ // When Internet Not Connected
    // container.classList.add(`hide`);
    toast.classList.add(`offline`);
    title.innerText = `You're Offline Now`;
    subTitle.innerText = `Internet Not Connected`;
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
    closeIcon.addEventListener(`click`, ()=>{
        container.classList.add(`hide`);
    })
}

// Calling ajax function 100ms so it will continuosly check whether the internet is connected or not

setInterval(() => {
    ajax();
}, 100);

}