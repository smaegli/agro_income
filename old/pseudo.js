function setregion() {
    firstlayerkey = "region";
    loaddata()
}

function setbetriebstyp() {
    firstlayerkey = "type";
    loaddata()
}

var firstlayerkey = "region";
var secondlayerkey = "type";
var thirdlayerkey = "parent";

loaddata();

function loaddata() {
    d3.csv("../data/LwData_Vis.csv").then(function (data) {

        var datacsv = {
            name: "root",
            children: []
        }

        var parent = d3.group(data, d => d[firstlayerkey]);
        Array.from(parent.keys()).forEach(function (group) {
            if (group === ""){
                return
            }
            var firstchild = {
                name: group,
                children: []
            }


            var child1 = d3.group(parent.get(group), d => d[secondlayerkey]);
            Array.from(child1.keys()).forEach(function (group2) {
                if (group2 === ""){
                    return
                }
                var secondchild = {
                    name: group2,
                    children: []
                }

                var child2 = d3.group(parent.get(group), d => d[thirdlayerkey]);
                Array.from(child2.keys()).forEach(function (group3) {
                    if (group3 === ""){
                        return
                    }
                    var thirdchild = {
                        name: group3,
                        children: child2.get(group3)
                    }
                    secondchild.children.push(thirdchild);
                })

                firstchild.children.push(secondchild);
            })

            


            datacsv.children.push(firstchild);

        })
        console.log(datacsv)
    })
}