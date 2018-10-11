var source = document.querySelector("#listTemplate").innerHTML;
var template = Handlebars.compile(source);

function makingPendingList() {
    for (project of PAGE_DATA.projects) {
        if (project.status === "Pending") {
            var html = template({
                name: project.name,
                status: project.status,
                dateAdded: `${project.dateAdded.getMonth() +
                    1}-${project.dateAdded.getDate()}-${project.dateAdded.getYear() +
                    1900}`
            });
            document
                .querySelector(".pendingListLocation")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.status === "Done") {
            var html = template({
                name: project.name,
                status: project.status,
                dateAdded: `${project.dateAdded.getMonth() +
                    1}-${project.dateAdded.getDate()}-${project.dateAdded.getYear() +
                    1900}`
            });
            document
                .querySelector(".doneListLocation")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.status === "Cancelled") {
            var html = template({
                name: project.name,
                status: project.status,
                dateAdded: `${project.dateAdded.getMonth() +
                    1}-${project.dateAdded.getDate()}-${project.dateAdded.getYear() +
                    1900}`
            });
            document
                .querySelector(".cancelledListLocation")
                .insertAdjacentHTML("beforeend", html);
        }
    }
}

makingPendingList();

function statusNumber() {
    var pending = 0;
    var done = 0;
    var cancelled = 0;
    for (project of PAGE_DATA.projects) {
        if (project.status === "Pending") {
            pending += 1;
        } else if (project.status === "Done") {
            done += 1;
        } else if (project.status === "Cancelled") {
            cancelled += 1;
        }
    }
    document.querySelector("#pendingNum").innerHTML = pending;
    document.querySelector("#doneNum").innerHTML = done;
    document.querySelector("#cancelledNum").innerHTML = cancelled;
}

statusNumber();

function makeProject(event) {
    event.preventDefault();
    var input = event.target.todoInput.value;
    var today = new Date();
    console.log(input);
    newProject = template({
        name: input,
        status: "Pending",
        dateAdded: `${today.getMonth() +
            1}-${today.getDate()}-${today.getYear() + 1900}`
    });
    PAGE_DATA.projects.push(newProject);
    document
        .querySelector(".pendingListLocation")
        .insertAdjacentHTML("beforeend", newProject);
    document.querySelector("#pendingNum").innerHTML =
        Number(document.querySelector("#pendingNum").innerHTML) + 1;
}

document.forms.toDoForm.addEventListener("submit", makeProject);
