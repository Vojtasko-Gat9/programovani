function setup() {
    noCanvas();

    print(`ListA: ${sortedListA}`);
    print(`ListB: ${sortedListB}`);

    print(`Merged: ${merge(sortedListA, sortedListB)}`);
}
// Funkce merge dostance dva setřízené seznamy.
// Doplňte ji, aby seznamy 'slila' do jednoho setřízeného seznamu.
// Není potřeba nic znovu třídit, stačí přidávat do výsledného seznamu ve správném pořadí
function merge(listA, listB) {
    let out = [];

    let indexA = 0
    let indexB = 0

    let len = listA.length + listB.length

    for (let i = 0; i < len; i++) {
    

        if (indexB >= listB.length || listA[indexA] < listB[indexB]) {
            out.push(listA[indexA])
            indexA++
        }
        else {
            out.push(listB[indexB])
            indexB++
        }

    }



    return out;

}
