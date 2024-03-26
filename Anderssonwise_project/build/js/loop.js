
document.addEventListener('DOMContentLoaded', async () => {
    console.log("listrening");
    

    const teton_1 = document.getElementById('teton');
    const shield_1 = document.getElementById('shield');
    const elizita_1 = document.getElementById('elizita');

  const delay = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
  };

  
  const printValues = async () => {
    if (elizita_1 && teton_1 && shield_1) {

        elizita_1.classList.toggle('hidden');
        teton_1.classList.toggle('hidden');
        console.log("listrening1");
        await delay(10000);

        teton_1.classList.toggle('hidden');
        shield_1.classList.toggle('hidden');
        console.log("listrening2");
        await delay(10000);

        shield_1.classList.toggle('hidden');
        elizita_1.classList.toggle('hidden');
        console.log("listrening3");
        await delay(10000);
        
    }

        
    }



    while (true) {await printValues();}

})