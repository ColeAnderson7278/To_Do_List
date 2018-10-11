function makingPendingList() {
    var source = document.querySelector("#listTemplate").innerHTML;
    var template = Handlebars.compile(source);
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
