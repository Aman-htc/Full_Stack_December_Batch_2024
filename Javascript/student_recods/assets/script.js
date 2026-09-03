


let students = [];

    document.getElementById("addBtn").addEventListener("click", () => {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const grade = document.getElementById("grade").value;
      console.log(name,age,grade)
      

      if (name && age && grade) {
        students.push({ name, age, grade });
      
        renderTable();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("grade").value = "";
      } else {
        alert("Please fill all fields");
      }
    });

    function renderTable() {
      const table = document.getElementById("studentTable");
      table.innerHTML = `
        <tr>
          <th>Name</th><th>Age</th><th>Grade</th>
        </tr>`;
     
      students.forEach((s) => {
         
        const row = `<tr><td>${s.name}</td><td>${s.age}</td><td>${s.grade}</td></tr>`;
        table.innerHTML += row;
      })
    }