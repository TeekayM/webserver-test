/*

Name : projectname
Image : projectimage
OtherImages : pi_#
ProjectDescription: projectdescription
project detai


*/

var ids = {
    name: "projectname",
    image: "projectimage",
    image1: "pi_1",
    image2: "pi_2",
    image3: "pi_3",
    image4: "pi_4",
    description: "projectdescription",
    projectdetalil_discontinued: "pd_discontinued",
    projectdetalil_tool: "pd_tool",
    projectdetalil_game: "pd_game",
    projectdetalil_alpha: "pd_alpha",
    projectdetalil_beta: "pd_beta",
    projectdetalil_opensource: "pd_opensource",
    projectdetalil_online: "pd_online",
    projectdetalil_discontinued_image: "pd_discontinued_img",
    projectdetalil_tool_image: "pd_tool_img",
    projectdetalil_game_image: "pd_game_img",
    projectdetalil_alpha_image: "pd_alpha_img",
    projectdetalil_beta_image: "pd_beta_img",
    projectdetalil_opensource_image: "pd_opensource_img",
    projectdetalil_online_image: "pd_online_img",
    button1: "button1",
    button2: "button2",
    button3: "button3"
}


var path = window.location.pathname;
var page = path.split("/").pop();
var myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
let myRequest = new Request("./projects.json", myInit);
fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        var path = window.location.pathname;
        console.log(path);
        var _page = path.split("/").pop();
        console.log(_page);
        var __page = _page.split(".");
        var page = __page[0];
        console.log(page);
        project = data[page]
        document.getElementById("projectname").innerText = project.name
        document.getElementById(ids.image).src = "./" + page + "/icon.png"
        document.getElementById(ids.image1).src = "./" + page + "/image1.png"
        document.getElementById(ids.image2).src = "./" + page + "/image2.png"
        document.getElementById(ids.image3).src = "./" + page + "/image3.png"
        document.getElementById(ids.image4).src = "./" + page + "/image4.png"
        document.getElementById(ids.description).firstElementChild.innerHTML = project.description
        if (project.buttons.button1.enabled == true) {
            document.getElementById(ids.button1).innerText = project.buttons.button1.text
            document.getElementById(ids.button1).href = project.buttons.button1.url
        } else {
            document.getElementById(ids.button1).remove()
        }
        if (project.buttons.button2.enabled == true) {
            document.getElementById(ids.button2).innerText = project.buttons.button2.text
            document.getElementById(ids.button2).href = project.buttons.button2.url
        } else {
            document.getElementById(ids.button2).remove()
        }
        if (project.buttons.button3.enabled == true) {
            document.getElementById(ids.button3).innerText = project.buttons.button3.text
            document.getElementById(ids.button3).href = project.buttons.button3.url
        } else {
            document.getElementById(ids.button3).remove()
        }

        for (const type of Object.keys(project.types)) {
            if (project.types[type] == false) {
                document.getElementById("pd_" + type).remove()
                document.getElementById("pd_" + type + "_img").remove()
            }
        }

    });