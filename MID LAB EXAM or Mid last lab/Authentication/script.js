document.addEventListener("DOMContentLoaded" , () => {
    const forms =document.querySelectorAll("form");
    forms. forEach(form => {
    forms.addEventListener("submit" , (e) =>{
        e.preventDefault();
        alert("continue")

    });

    });
});