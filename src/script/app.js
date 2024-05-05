// ===> Run All Methods <===
document.addEventListener("DOMContentLoaded", runAllMethods);
function runAllMethods(e) {
    if (e.target) {
        asideObject.showSideBar();
        asideObject.hideSideBar();
    }
};

// ===> Sideabar Object <===
let asideObject = {
    aside: document.getElementById("aside"),
    openBtn: document.getElementById("openBtn"),
    closeBtn: document.getElementById("closeBtn"),


    // ===> Show Sidebar Menu <===
    showSideBar: function () {
        this.openBtn.addEventListener("click", (e) => {
            if (e.target) {
                this.aside.style.transform = `translate(21.25rem)`
                this.closeBtn.style.display = 'block'
                document.body.style.background = `rgba(0, 0, 0, 0.5)`

            };
        });
    },
    // ===> Hide Sidebar Menu <===
    hideSideBar: function () {
        this.closeBtn.addEventListener("click", (e) => {
            if (e.target) {
                this.aside.style.transform = `translate(41.875rem)`
                document.body.style.background = ""
            }
        })
    }
};


