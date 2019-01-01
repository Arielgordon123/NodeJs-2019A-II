
function addCar() {
    let newCar = {
        "veh_reg_no": document.getElementById("new_veh_reg").value,
        "category": document.getElementById("new_category").value,
        "brand": document.getElementById("new_brand").value,
        "desc": document.getElementById("new_desc").value,
        "daily_rate": document.getElementById("new_daily_rate").value
    };


    fetch("/api/car", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
    })
        .then(res => {
            getAllCars();
            document.getElementById("new_veh_reg").value = "";
            document.getElementById("new_category").value = "car";
            document.getElementById("new_brand").value = "";
            document.getElementById("new_desc").value = "";
            document.getElementById("new_daily_rate").value = "";
        })
        .catch(ex => console.log(ex));

}


function editCar(){
    let carId = document.getElementById("car_update_id").value;
    let updatedCar = {
        "daily_rate": document.getElementById("edit_daily_rate").value
    };

    fetch(`/api/car/${carId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCar),
    })
        .then(res => {
            getAllCars();
            document.getElementById("edit_daily_rate").value = "";
        })
        .catch(ex => console.log(ex));

}

function deleteCar() {
    let carId = document.getElementById("car_delete_id").value;
    fetch(`/api/car/${carId}`, { method: "DELETE" })
        .then(res => {
            getAllCars();
        })
        .catch(ex => console.log(ex));
}

function getAllCars() {
    fetch("/api/cars")
        .then(res => res.json())
        .then(body => {
            let idList = "";
            let str = `
                <tr>
                    <th>veh_reg_no</th>
                    <th>category</th>
                    <th>brand</th>
                    <th>desc</th>
                    <th>daily_rate</th>                                                           
                </tr>
                `;

            for (car of body) {
                str += `
                <tr>
                    <td>${car.veh_reg_no}</td>
                    <td>${car.category}</td>
                    <td>${car.brand}</td>
                    <td>${car.desc}</td>
                    <td>${car.daily_rate}</td>                                                           
                </tr>
                `;


                idList += `<option value='${car.veh_reg_no}'>${car.veh_reg_no}</option>`;
            }

            document.getElementById("car_update_id").innerHTML = idList;
            document.getElementById("car_delete_id").innerHTML = idList;
            document.getElementById("cars").innerHTML = str;
        }
        )
        .catch(ex => console.log(ex));
}
