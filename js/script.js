document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("my_form");
    const tableBody = document.getElementById("my_table").getElementsByTagName("tbody")[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = document.getElementById("id").value;
        const fname = document.getElementById("fname").value;
        const fnumber = document.getElementById("fnumber").value;
        const fnumber_1 = document.getElementById("fnumber_1").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const age = document.getElementById("age").value;

        if (!id || !fname || !fnumber || !fnumber_1 || !gender || !age) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        if (id < 0 || fnumber < 0 || fnumber_1 < 0 || age < 0) {
            alert("Пожалуйста, вводите только положительные числа.");
            return;
        }

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${fname}</td>
            <td>${fnumber}</td>
            <td>${fnumber_1}</td>
            <td>${gender}</td>
            <td>${age}</td>
        `;

        tableBody.appendChild(newRow);
        form.reset();
    });
});
