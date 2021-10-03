const new_post = document.getElementById("new-feedback");
const text_area = document.getElementById("text-area");

function submit_feedback() {
    if(text_area.value.trim() !== "") {
        new_post.innerHTML += `<article class="fans">
            <p>${text_area.value}</p>
            <div class="fan-article-footer">
                <div class="fan-info">${new Date().toUTCString()}</div>
                <div class="fan-info">Fan #1</div>
            </div>
            <hr />
        </article>`;
        text_area.value = "";
    } else {
        alert("Textarea can't be blank!")
    }
}
