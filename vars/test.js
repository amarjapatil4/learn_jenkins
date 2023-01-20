// pipeline {
//     agent any
//     stages {
//         stage("build") {
//             steps {
//                 getStepResults()
//             }
//         }
//     }
// }
// def getStepResults() {
//     echo "Hello Amarja..."

//     writeFile file: 'jstest.js', text: ''' 
    window.addEventListener("load", function() {
        var onPipelineStepsPage =  document.getElementById('nodeGraph');
        if (typeof(onPipelineStepsPage) != 'undefined' && onPipelineStepsPage != null)
        {
            document.querySelector("#main-panel").style.backgroundColor = "#e9dcac";
            let btn = document.createElement("button");
            btn.innerHTML = "Failed Steps";
            btn.type = "button";
            btn.style.cursor = "pointer";
            btn.style.fontWeight = "600";
            btn.style.border = "1px solid transparent";
            btn.style.borderRadius = "4px";
            btn.style.backgroundColor = "#c6445a";
            btn.id = "failed_steps";
            document.querySelector("#nodeGraph .jenkins-table thead tr th:nth-of-type(4)").appendChild(btn);
            document.querySelector("#nodeGraph .jenkins-table tr #failed_steps").addEventListener("click", function() {
                var btnText = document.getElementById('failed_steps').innerText;
                console.log(btnText);
                tr =  document.querySelectorAll(".jenkins-table tbody tr");
                for (i = 0; i < tr.length; i++) {
                    if (btnText == "Failed Steps") {
                        btn.innerHTML = "All Steps";
                        btn.style.backgroundColor = "#cbcccb";
                        if (tr[i].querySelectorAll(".icon-red").length > 0) 
                        {
                            tr[i].style.backgroundColor = "#ccc";
                        } else {
                            tr[i].style.display = "none";
                        }
                    } else {
                        btn.innerHTML = "Failed Steps";
                        btn.style.backgroundColor = "#c6445a";
                        tr[i].style.display = "table-row";
                    }
                }
            })
        }
        
    })
// '''
// }
