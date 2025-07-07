document.getElementById("dataForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const idResponse = await fetch("http://localhost:5000/api/data/next-id");
    const idData = await idResponse.json();
    const id = idData.nextId;

    const electricity = document.getElementById("electricity").value;
    const emissions = document.getElementById("emissions").value;
    const recycling = document.getElementById("recycling").value;

    const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, electricity, emissions, recycling })
    });

    const data = await response.json();
    alert(`Data saved! Your Record ID: ${data.data.id}`);
});

document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchId = document.getElementById("searchId").value;

    const response = await fetch(`http://localhost:5000/api/data/${searchId}`);
    const data = await response.json();

    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    if (!data.found) {
        tableBody.innerHTML = "<tr><td colspan='4'>No record found</td></tr>";
        return;
    }

    displayRecords([data.record]);
});

document.getElementById("showAll").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:5000/api/data/all");
 if (!response.ok) {
    console.error("HTTP Error:", response.status);
    throw new Error(`Server responded with ${response.status}`);
}

        const data = await response.json();

        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";

        if (!Array.isArray(data) || data.length === 0) {
    document.querySelector("#dataTable tbody").innerHTML = "<tr><td colspan='4'>No records found</td></tr>";
    return;
}

        displayRecords(data);
    } catch (err) {
        console.error("Fetch error:", err);
        alert("Could not load records. Please try again later.");
    }
});

function displayRecords(data) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    data.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.id}</td>
            <td>${entry.electricity}</td>
            <td>${entry.emissions}</td>
            <td>${entry.recycling}</td>
        `;
        tableBody.appendChild(row);
    });
}