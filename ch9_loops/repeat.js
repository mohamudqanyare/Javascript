function showSomaliaCities(){
    console.log(Mogadishu)
    console.log(Hergeisa)
    console.log(Kismayo)
    console.log("...................................................................");
}

for (let i = 0; i < 100; i++) {
    // if (i == 3) {
    //     break;
    // }
    if (i == 3) {
        continue;
    }

    console.log(i);
    showSomaliaCities();
}
