function main() {
    console.log("5%")
    setTimeout(() => {
        console.log("13%")
        setTimeout(() => {
            console.log("47%")
            setTimeout(() => {
                console.log("64%")
                setTimeout(() => {
                    console.log("99%")
                    setTimeout(()=>{
                        console.log("Complete: Earth is in fact flat.")
                    }, 5000);
                }, 1000);
            }, 1800);
        }, 400);
    }, 2400);
}

main();